// Unit Test for scraper.py

describe("Scrapping Past Events Test", () => {
    // Tests to see if data is being scraped and converted to JSON correctly.
    test("Finding Latin Dance Club Meeting", () => {
        // Calls function to get data.
        const data = NULL;
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            title: "Latin Dance Club Meeting",
            startDate: "April 22 2024 at 6:30 PM CDT",
            endDate: "April 22 2024 at 7:30 PM",
            location: "Rehearsal Nook at Cross D Apartments",
            address: "",
            description: "",
            link: "https://ou.campuslabs.com/engage/event/9847932"
        }));
    });
});