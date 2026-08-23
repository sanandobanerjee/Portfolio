import { ContributionSummary, ContributionDay, ContributionWeek } from "@/lib/types";

const GITHUB_USERNAME = "sanandobanerjee";

interface GraphQLContributionDay {
  contributionCount: number;
  date: string;
}

interface GraphQLContributionWeek {
  contributionDays: GraphQLContributionDay[];
}

interface GraphQLResponse {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: GraphQLContributionWeek[];
        };
      };
    };
  };
  errors?: { message: string }[];
}

function levelFromCount(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function computeStreaks(days: ContributionDay[]): { current: number; longest: number } {
  let longest = 0;
  let running = 0;
  let current = 0;

  for (const day of days) {
    if (day.count > 0) {
      running += 1;
      longest = Math.max(longest, running);
    } else {
      running = 0;
    }
  }

  for (let i = days.length - 1; i >= 0; i -= 1) {
    if (days[i].count > 0) {
      current += 1;
    } else {
      break;
    }
  }

  return { current, longest };
}

export async function getContributionSummary(): Promise<ContributionSummary | null> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return null;
  }

  const query = `
    query ($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login: GITHUB_USERNAME } }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return null;
  }

  const json: GraphQLResponse = await response.json();

  if (!json.data) {
    return null;
  }

  const calendar = json.data.user.contributionsCollection.contributionCalendar;

  const weeks: ContributionWeek[] = calendar.weeks.map((week) => ({
    days: week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: levelFromCount(day.contributionCount),
    })),
  }));

  const flatDays = weeks.flatMap((week) => week.days);
  const { current, longest } = computeStreaks(flatDays);

  return {
    weeks,
    totalContributions: calendar.totalContributions,
    currentStreak: current,
    longestStreak: longest,
  };
}
