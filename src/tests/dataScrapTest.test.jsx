// Unit Test for scraper.py

describe("Scrapping Past Events Test", () => {
    // Tests to see if data is being scraped and converted to JSON correctly.
    test("Finding Latin Dance Club Meeting", () => {
        // Calls function to get data.
        const data = NULL;
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            title: "Latin Dance Club Meeting",
            startDate: "04-08-2024",
            endDate: "04-08-2024",
            startTime: "5:00PM",
            endTime: "7:30PM",
            location: "Rehearsal Nook at Cross D Apartments",
            link: "https://ou.campuslabs.com/engage/event/9847932"
        }));
    });
    test("Finding Pre-Health Involvment Fair", () => {
        const data = NULL;
        expect(data).toEqual(JSON.stringify({
            title: "Pre-Health Involvment Fair",
            startDate: "04-08-2024",
            endDate: "04-08-2024",
            startTime: "1:00PM",
            endTime: "5:00PM",
            location: "Jim Thorpe A and B 1620 Asp Ave, Norman, OK 73019",
            link: "https://ou.campuslabs.com/engage/event/10072148"
        }));
    });
    test("Finding Sooner Eclipse on the Soval", () => {
        const data = NULL;
        expect(data).toEqual(JSON.stringify({
            title: "Sooner Eclipse on the Soval",
            startDate: "04-08-2024",
            endDate: "04-08-2024",
            startTime: "12:30PM",
            endTime: "2:30PM",
            location: "South Oval",
            link: "https://ou.campuslabs.com/engage/event/10078165"
        }));
    });
    test("Finding ASEAN Cultural Night", () => {
        const data = NULL;
        expect(data).toEqual(JSON.stringify({
            title: "ASEAN Cultural Night",
            startDate: "04-05-2024",
            endDate: "04-05-2024",
            startTime: "7:00PM",
            endTime: "9:30PM",
            location: "The Wesley 428 W Lindsey, Norman, Oklahoma",
            link: "https://ou.campuslabs.com/engage/event/10075543"
        }));
    });
});