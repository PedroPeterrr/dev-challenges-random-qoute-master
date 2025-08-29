export interface Quote {
  quote: string;
  author: string;
  tags: string[];
}

export const fetchQuotes = async (): Promise<Quote[]> => {
    try {
        const res = await fetch(
            "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
    );

        if (!res.ok) {
            throw new Error("Failed to fetch quotes");
        }

        const data: Quote[] = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return [];
    }
};
