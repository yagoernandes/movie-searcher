import * as actions from "./actions"
// @ponicode
describe("actions.searchRequest", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.searchRequest("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.searchRequest("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.searchRequest("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.searchRequest("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.searchRequest("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.searchSuccess", () => {
    test("0", () => {
        let object: any = [{ media_type: "movie", poster_path: "path/to/file.ext", adult: true, overview: "La Plata Dolphin", release_date: "Mon Aug 03 12:45:00", genre_ids: [12345, 987650, 12, "a1969970175", 56784], id: 12, original_title: "Future Interactions Representative", original_language: "George", title: "Internal Interactions Strategist", backdrop_path: "C:\\\\path\\to\\file.ext", popularity: 0, vote_count: -100, video: false, vote_average: 100 }, { media_type: "tv", poster_path: "./path/to/file", popularity: 1, id: 987650, overview: "La Plata Dolphin", backdrop_path: "path/to/folder/", vote_average: 1, first_air_date: "Mon Aug 03 12:45:00", origin_country: ["IR", "PG", "PG"], genre_ids: [12], original_language: "Anas", vote_count: 1, name: "Anas", original_name: "Ronald Keeling", episode_run_time: [56784], number_of_seasons: 100 }, { media_type: "tv", poster_path: "path/to/file.ext", popularity: 1, id: "a1969970175", overview: "Long-finned Pilot Whale", backdrop_path: ".", vote_average: 0, first_air_date: "Mon Aug 03 12:45:00", origin_country: ["PG", "IR", "JO"], genre_ids: [12], original_language: "Jean-Philippe", vote_count: -5.48, name: "Pierre Edouard", original_name: "Maurice Purdy", episode_run_time: [12], number_of_seasons: -100 }, { media_type: "movie", poster_path: "C:\\\\path\\to\\folder\\", adult: true, overview: "Long-finned Pilot Whale", release_date: "2017-09-29T23:01:00.000Z", genre_ids: ["a1969970175", 987650, "bc23a9d531064583ace8f67dad60f6bb", 56784], id: 12345, original_title: "Future Interactions Representative", original_language: "Anas", title: "Dynamic Quality Specialist", backdrop_path: "path/to/folder/", popularity: 1, vote_count: -5.48, video: false, vote_average: 1 }]
        let callFunction: any = () => {
            actions.searchSuccess({ profile_path: "path/to/folder/", adult: false, id: 56784, name: "Jean-Philippe", popularity: -5.48, known_for: object, known_for_department: "Michael", birthday: "bed-free@tutanota.de", biography: "and Sons" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.searchSuccess({ media_type: "movie", poster_path: "path/to/file.ext", adult: true, overview: "La Plata Dolphin", release_date: "2017-09-29T23:01:00.000Z", genre_ids: [56784], id: 12345, original_title: "Dynamic Quality Specialist", original_language: "Edmond", title: "Internal Interactions Strategist", backdrop_path: "/path/to/file", popularity: 1, vote_count: -5.48, video: true, vote_average: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object: any = [{ media_type: "movie", poster_path: "C:\\\\path\\to\\file.ext", adult: true, overview: "Sei Whale", release_date: "2017-09-29T19:01:00.000", genre_ids: ["a1969970175", "a1969970175", "a1969970175", 987650, "a1969970175"], id: 987650, original_title: "International Intranet Coordinator", original_language: "Jean-Philippe", title: "Future Interactions Representative", backdrop_path: ".", popularity: -100, vote_count: 1, video: true, vote_average: -5.48 }, { media_type: "tv", poster_path: "C:\\\\path\\to\\folder\\", popularity: 100, id: 12, overview: "La Plata Dolphin", backdrop_path: ".", vote_average: 1, first_air_date: "01:04:03", origin_country: ["VN", "FM", "VN"], genre_ids: ["a1969970175"], original_language: "Pierre Edouard", vote_count: -5.48, name: "Anas", original_name: "Janet Homenick", episode_run_time: [12345], number_of_seasons: -100 }, { media_type: "tv", poster_path: ".", popularity: 100, id: "a1969970175", overview: "Amazon River Dolphin", backdrop_path: "/path/to/file", vote_average: 1, first_air_date: "2017-09-29T19:01:00.000", origin_country: ["JO", "JO", "IR"], genre_ids: ["bc23a9d531064583ace8f67dad60f6bb"], original_language: "Pierre Edouard", vote_count: 1, name: "Jean-Philippe", original_name: "Janet Homenick", episode_run_time: [987650], number_of_seasons: 1 }, { media_type: "movie", poster_path: "/path/to/file", adult: true, overview: "Sei Whale", release_date: "01:04:03", genre_ids: ["a1969970175", 12345, "bc23a9d531064583ace8f67dad60f6bb", 56784], id: 12345, original_title: "Future Interactions Representative", original_language: "Anas", title: "Dynamic Quality Specialist", backdrop_path: "path/to/folder/", popularity: -5.48, vote_count: -5.48, video: false, vote_average: -100 }]
        let callFunction: any = () => {
            actions.searchSuccess({ profile_path: "/path/to/file", adult: false, id: "a1969970175", name: "Edmond", popularity: -5.48, known_for: object, known_for_department: "George", birthday: "something@example.com", biography: "and Sons" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.searchSuccess({ media_type: "tv", poster_path: "path/to/folder/", popularity: 0, id: 12, overview: "Sei Whale", backdrop_path: "path/to/folder/", vote_average: -100, first_air_date: "01:04:03", origin_country: ["VN", "VN", "PG"], genre_ids: [12, 12345, 987650, 12], original_language: "Anas", vote_count: -100, name: "Michael", original_name: "Maurice Purdy", episode_run_time: [987650], number_of_seasons: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.searchSuccess({ media_type: "tv", poster_path: "C:\\\\path\\to\\folder\\", popularity: -100, id: 56784, overview: "Sei Whale", backdrop_path: "path/to/file.ext", vote_average: -5.48, first_air_date: "2017-09-29T19:01:00.000", origin_country: ["JO", "PG", "PG"], genre_ids: ["bc23a9d531064583ace8f67dad60f6bb", "a1969970175", 56784, "bc23a9d531064583ace8f67dad60f6bb"], original_language: "Anas", vote_count: -100, name: "George", original_name: "Janet Homenick", episode_run_time: ["bc23a9d531064583ace8f67dad60f6bb"], number_of_seasons: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.searchSuccess({ media_type: "movie", poster_path: "", adult: true, overview: "", release_date: "", genre_ids: [], id: Infinity, original_title: "", original_language: "", title: "", backdrop_path: "", popularity: Infinity, vote_count: Infinity, video: false, vote_average: Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.searchFailure", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.searchFailure(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.searchFailure(400)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.searchFailure(200)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.searchFailure("error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.searchFailure(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.searchFailure(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchTvShow", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchTvShow(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchTvShow("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchTvShow(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchTvShow(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchTvShow("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchTvShow(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchTvShowSuccess", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchTvShowSuccess({ media_type: "tv", poster_path: "C:\\\\path\\to\\file.ext", popularity: 1, id: 12345, overview: "Sei Whale", backdrop_path: "/path/to/file", vote_average: 100, first_air_date: "01:04:03", origin_country: ["VN", "VN", "FM", "PG", "JO"], genre_ids: [12, 12345, 987650, "bc23a9d531064583ace8f67dad60f6bb"], original_language: "George", vote_count: -5.48, name: "George", original_name: "Gail Hoppe", episode_run_time: ["a1969970175"], number_of_seasons: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchTvShowSuccess({ media_type: "movie", poster_path: ".", adult: true, overview: "Long-finned Pilot Whale", release_date: "2017-09-29T19:01:00.000", genre_ids: [12, "a1969970175"], id: "a1969970175", original_title: "International Intranet Coordinator", original_language: "Edmond", title: "Internal Interactions Strategist", backdrop_path: "path/to/folder/", popularity: -100, vote_count: 0, video: true, vote_average: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object: any = [{ media_type: "movie", poster_path: "./path/to/file", adult: false, overview: "Amazon River Dolphin", release_date: "Mon Aug 03 12:45:00", genre_ids: ["a1969970175", "bc23a9d531064583ace8f67dad60f6bb", 987650, "a1969970175", "a1969970175"], id: 12, original_title: "Future Interactions Representative", original_language: "Anas", title: "International Intranet Coordinator", backdrop_path: "C:\\\\path\\to\\folder\\", popularity: 1, vote_count: 1, video: true, vote_average: 100 }]
        let callFunction: any = () => {
            actions.fetchTvShowSuccess({ profile_path: "C:\\\\path\\to\\folder\\", adult: false, id: "a1969970175", name: "Jean-Philippe", popularity: 1, known_for: object, known_for_department: "Jean-Philippe", birthday: "user@host:300", biography: "and Sons" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchTvShowSuccess({ media_type: "tv", poster_path: "C:\\\\path\\to\\file.ext", popularity: -5.48, id: 12, overview: "Long-finned Pilot Whale", backdrop_path: "./path/to/file", vote_average: -5.48, first_air_date: "Mon Aug 03 12:45:00", origin_country: ["PG", "FM", "JO", "IR", "VN"], genre_ids: [12345, 12, "a1969970175", 56784], original_language: "Pierre Edouard", vote_count: -100, name: "Michael", original_name: "Maurice Purdy", episode_run_time: [56784], number_of_seasons: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchTvShowSuccess({ media_type: "movie", poster_path: "C:\\\\path\\to\\folder\\", adult: true, overview: "La Plata Dolphin", release_date: "Mon Aug 03 12:45:00", genre_ids: [12, 12, 12], id: 987650, original_title: "Dynamic Quality Specialist", original_language: "Pierre Edouard", title: "Internal Interactions Strategist", backdrop_path: "path/to/folder/", popularity: 1, vote_count: 1, video: false, vote_average: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchTvShowSuccess({ media_type: "tv", poster_path: "", popularity: -Infinity, id: -Infinity, overview: "", backdrop_path: "", vote_average: -Infinity, first_air_date: "", origin_country: [], genre_ids: [], original_language: "", vote_count: -Infinity, name: "", original_name: "", episode_run_time: [], number_of_seasons: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchTvShowFailure", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchTvShowFailure("too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchTvShowFailure(500)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchTvShowFailure("invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchTvShowFailure(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchTvShowFailure(404)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchTvShowFailure(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchMovie", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchMovie("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchMovie(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchMovie("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchMovie(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchMovie(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchMovie(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchMovieSuccess", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchMovieSuccess({ media_type: "movie", poster_path: "./path/to/file", adult: false, overview: "La Plata Dolphin", release_date: "01:04:03", genre_ids: [12, 56784, 12345, "a1969970175"], id: "bc23a9d531064583ace8f67dad60f6bb", original_title: "Internal Interactions Strategist", original_language: "Anas", title: "Internal Interactions Strategist", backdrop_path: "path/to/folder/", popularity: 1, vote_count: 100, video: true, vote_average: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object: any = [{ media_type: "movie", poster_path: "path/to/folder/", adult: false, overview: "Long-finned Pilot Whale", release_date: "01:04:03", genre_ids: [12345, "a1969970175", "a1969970175", "bc23a9d531064583ace8f67dad60f6bb"], id: 12345, original_title: "Future Interactions Representative", original_language: "Jean-Philippe", title: "Internal Interactions Strategist", backdrop_path: "./path/to/file", popularity: -5.48, vote_count: 100, video: true, vote_average: 100 }, { media_type: "tv", poster_path: "path/to/folder/", popularity: 1, id: "bc23a9d531064583ace8f67dad60f6bb", overview: "Amazon River Dolphin", backdrop_path: "path/to/folder/", vote_average: 0, first_air_date: "2017-09-29T23:01:00.000Z", origin_country: ["PG", "JO", "IR", "FM", "PG"], genre_ids: [12345, 12345, "bc23a9d531064583ace8f67dad60f6bb"], original_language: "Anas", vote_count: 1, name: "Jean-Philippe", original_name: "Ronald Keeling", episode_run_time: [56784], number_of_seasons: 0 }, { media_type: "tv", poster_path: "path/to/folder/", popularity: 1, id: 12, overview: "Sei Whale", backdrop_path: "C:\\\\path\\to\\folder\\", vote_average: 100, first_air_date: "Mon Aug 03 12:45:00", origin_country: ["IR", "PG", "IR", "PG"], genre_ids: [987650, "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", 12345], original_language: "Anas", vote_count: -100, name: "Pierre Edouard", original_name: "Ronald Keeling", episode_run_time: ["a1969970175"], number_of_seasons: -100 }]
        let callFunction: any = () => {
            actions.fetchMovieSuccess({ profile_path: "/path/to/file", adult: false, id: 987650, name: "George", popularity: -5.48, known_for: object, known_for_department: "Edmond", birthday: "user1+user2@mycompany.com", biography: "and Sons" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object: any = [{ media_type: "tv", poster_path: "C:\\\\path\\to\\folder\\", popularity: 100, id: 987650, overview: "False Killer Whale", backdrop_path: "path/to/file.ext", vote_average: -5.48, first_air_date: "2017-09-29T23:01:00.000Z", origin_country: ["PG", "JO", "VN", "IR"], genre_ids: ["a1969970175"], original_language: "Jean-Philippe", vote_count: 100, name: "Michael", original_name: "Janet Homenick", episode_run_time: [56784], number_of_seasons: -100 }, { media_type: "tv", poster_path: "path/to/file.ext", popularity: 0, id: 56784, overview: "La Plata Dolphin", backdrop_path: "path/to/folder/", vote_average: -5.48, first_air_date: "2017-09-29T23:01:00.000Z", origin_country: ["JO", "VN"], genre_ids: ["a1969970175", 12], original_language: "George", vote_count: 1, name: "George", original_name: "Gail Hoppe", episode_run_time: ["bc23a9d531064583ace8f67dad60f6bb"], number_of_seasons: -5.48 }]
        let callFunction: any = () => {
            actions.fetchMovieSuccess({ profile_path: "path/to/file.ext", adult: false, id: "a1969970175", name: "George", popularity: -100, known_for: object, known_for_department: "Michael", birthday: "user@host:300", biography: "LLC" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object: any = [{ media_type: "movie", poster_path: "path/to/folder/", adult: false, overview: "Amazon River Dolphin", release_date: "01:04:03", genre_ids: ["bc23a9d531064583ace8f67dad60f6bb", 56784, "a1969970175", "bc23a9d531064583ace8f67dad60f6bb"], id: 12345, original_title: "International Intranet Coordinator", original_language: "Edmond", title: "Dynamic Quality Specialist", backdrop_path: "C:\\\\path\\to\\folder\\", popularity: -100, vote_count: 100, video: false, vote_average: 0 }, { media_type: "tv", poster_path: "C:\\\\path\\to\\file.ext", popularity: -5.48, id: 12, overview: "La Plata Dolphin", backdrop_path: "C:\\\\path\\to\\file.ext", vote_average: 100, first_air_date: "01:04:03", origin_country: ["PG", "FM", "PG", "FM", "PG"], genre_ids: [12345, 12345, "a1969970175"], original_language: "George", vote_count: 1, name: "George", original_name: "Becky Bednar", episode_run_time: ["bc23a9d531064583ace8f67dad60f6bb"], number_of_seasons: -5.48 }, { media_type: "tv", poster_path: "path/to/file.ext", popularity: 1, id: 12, overview: "Amazon River Dolphin", backdrop_path: "path/to/file.ext", vote_average: -100, first_air_date: "01:04:03", origin_country: ["FM", "VN", "FM", "IR"], genre_ids: ["a1969970175", 56784, "a1969970175", 12, 56784], original_language: "Jean-Philippe", vote_count: 0, name: "Anas", original_name: "Ronald Keeling", episode_run_time: [56784], number_of_seasons: -100 }]
        let callFunction: any = () => {
            actions.fetchMovieSuccess({ profile_path: "/path/to/file", adult: true, id: 12345, name: "Michael", popularity: 0, known_for: object, known_for_department: "Jean-Philippe", birthday: "bed-free@tutanota.de", biography: "and Sons" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object: any = [{ media_type: "movie", poster_path: "C:\\\\path\\to\\folder\\", adult: false, overview: "La Plata Dolphin", release_date: "2017-09-29T19:01:00.000", genre_ids: [987650, 12345, "a1969970175"], id: "bc23a9d531064583ace8f67dad60f6bb", original_title: "Future Interactions Representative", original_language: "Anas", title: "Direct Functionality Orchestrator", backdrop_path: "/path/to/file", popularity: 0, vote_count: -5.48, video: false, vote_average: -100 }, { media_type: "movie", poster_path: "./path/to/file", adult: true, overview: "False Killer Whale", release_date: "2017-09-29T19:01:00.000", genre_ids: [56784, 12, "bc23a9d531064583ace8f67dad60f6bb", "a1969970175"], id: 56784, original_title: "Dynamic Quality Specialist", original_language: "Edmond", title: "Direct Functionality Orchestrator", backdrop_path: "path/to/folder/", popularity: -5.48, vote_count: 1, video: false, vote_average: 1 }, { media_type: "movie", poster_path: "path/to/file.ext", adult: false, overview: "False Killer Whale", release_date: "01:04:03", genre_ids: ["bc23a9d531064583ace8f67dad60f6bb", 56784, 12345, "a1969970175", "bc23a9d531064583ace8f67dad60f6bb"], id: 12, original_title: "Dynamic Quality Specialist", original_language: "Edmond", title: "Dynamic Quality Specialist", backdrop_path: "/path/to/file", popularity: 0, vote_count: 0, video: false, vote_average: -5.48 }, { media_type: "movie", poster_path: "/path/to/file", adult: true, overview: "Sei Whale", release_date: "2017-09-29T23:01:00.000Z", genre_ids: [12345, 12, 12345, 987650, "bc23a9d531064583ace8f67dad60f6bb"], id: 12, original_title: "Future Interactions Representative", original_language: "Edmond", title: "Dynamic Quality Specialist", backdrop_path: "C:\\\\path\\to\\folder\\", popularity: 100, vote_count: 1, video: true, vote_average: 100 }, { media_type: "movie", poster_path: "/path/to/file", adult: true, overview: "Long-finned Pilot Whale", release_date: "Mon Aug 03 12:45:00", genre_ids: ["a1969970175", 12, "bc23a9d531064583ace8f67dad60f6bb"], id: 56784, original_title: "Direct Functionality Orchestrator", original_language: "Michael", title: "International Intranet Coordinator", backdrop_path: "path/to/folder/", popularity: -100, vote_count: -5.48, video: false, vote_average: 1 }]
        let callFunction: any = () => {
            actions.fetchMovieSuccess({ profile_path: "/path/to/file", adult: false, id: "bc23a9d531064583ace8f67dad60f6bb", name: "George", popularity: 1, known_for: object, known_for_department: "Anas", birthday: "bed-free@tutanota.de", biography: "LLC" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchMovieSuccess({ profile_path: "", adult: true, id: NaN, name: "", popularity: NaN, known_for: [], known_for_department: "", birthday: "", biography: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchLastMovie", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchLastMovie("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchLastMovie(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchLastMovie(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchLastMovie("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchLastMovie(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchLastMovie(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchLastMovieSuccess", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieSuccess({ media_type: "movie", poster_path: ".", adult: false, overview: "Amazon River Dolphin", release_date: "Mon Aug 03 12:45:00", genre_ids: [12345, 12345], id: 12, original_title: "Future Interactions Representative", original_language: "Edmond", title: "Direct Functionality Orchestrator", backdrop_path: "path/to/folder/", popularity: 0, vote_count: 100, video: false, vote_average: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieSuccess({ media_type: "movie", poster_path: "path/to/folder/", adult: true, overview: "Long-finned Pilot Whale", release_date: "2017-09-29T19:01:00.000", genre_ids: [12345, 987650, "bc23a9d531064583ace8f67dad60f6bb"], id: 987650, original_title: "Dynamic Quality Specialist", original_language: "Jean-Philippe", title: "Dynamic Quality Specialist", backdrop_path: "C:\\\\path\\to\\file.ext", popularity: 1, vote_count: -100, video: true, vote_average: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieSuccess({ media_type: "movie", poster_path: "C:\\\\path\\to\\folder\\", adult: false, overview: "Long-finned Pilot Whale", release_date: "2017-09-29T23:01:00.000Z", genre_ids: ["a1969970175"], id: 987650, original_title: "International Intranet Coordinator", original_language: "Pierre Edouard", title: "International Intranet Coordinator", backdrop_path: ".", popularity: 0, vote_count: -5.48, video: false, vote_average: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieSuccess({ media_type: "movie", poster_path: "C:\\\\path\\to\\folder\\", adult: false, overview: "La Plata Dolphin", release_date: "Mon Aug 03 12:45:00", genre_ids: [12345, "bc23a9d531064583ace8f67dad60f6bb", 987650, "bc23a9d531064583ace8f67dad60f6bb"], id: "bc23a9d531064583ace8f67dad60f6bb", original_title: "Future Interactions Representative", original_language: "Michael", title: "Internal Interactions Strategist", backdrop_path: "path/to/file.ext", popularity: 0, vote_count: -5.48, video: true, vote_average: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieSuccess({ media_type: "movie", poster_path: "./path/to/file", adult: false, overview: "Long-finned Pilot Whale", release_date: "Mon Aug 03 12:45:00", genre_ids: [12345, 56784, 987650], id: "a1969970175", original_title: "Direct Functionality Orchestrator", original_language: "Jean-Philippe", title: "Internal Interactions Strategist", backdrop_path: "C:\\\\path\\to\\folder\\", popularity: 100, vote_count: -100, video: false, vote_average: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieSuccess({ media_type: "movie", poster_path: "", adult: false, overview: "", release_date: "", genre_ids: [], id: -Infinity, original_title: "", original_language: "", title: "", backdrop_path: "", popularity: -Infinity, vote_count: -Infinity, video: false, vote_average: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchLastMovieFailure", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieFailure("Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieFailure(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieFailure(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieFailure("too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieFailure("invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchLastMovieFailure("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchMovieFailure", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchMovieFailure("multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchMovieFailure("too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchMovieFailure("invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchMovieFailure(200)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchMovieFailure("error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchMovieFailure(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchPerson", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchPerson(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchPerson(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchPerson(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchPerson("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchPerson("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchPerson(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchPersonSuccess", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchPersonSuccess({ media_type: "movie", poster_path: "path/to/folder/", adult: false, overview: "La Plata Dolphin", release_date: "Mon Aug 03 12:45:00", genre_ids: [12345, "a1969970175", "a1969970175", 56784], id: 12, original_title: "Future Interactions Representative", original_language: "Michael", title: "International Intranet Coordinator", backdrop_path: ".", popularity: 100, vote_count: -5.48, video: false, vote_average: -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchPersonSuccess({ media_type: "movie", poster_path: "C:\\\\path\\to\\folder\\", adult: true, overview: "Long-finned Pilot Whale", release_date: "01:04:03", genre_ids: [12345, 987650], id: 12, original_title: "International Intranet Coordinator", original_language: "Jean-Philippe", title: "Dynamic Quality Specialist", backdrop_path: ".", popularity: -100, vote_count: 0, video: true, vote_average: -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchPersonSuccess({ media_type: "tv", poster_path: "C:\\\\path\\to\\file.ext", popularity: 100, id: 12345, overview: "Long-finned Pilot Whale", backdrop_path: "./path/to/file", vote_average: -100, first_air_date: "2017-09-29T19:01:00.000", origin_country: ["VN"], genre_ids: [987650, 987650, 12, "a1969970175", 12], original_language: "Jean-Philippe", vote_count: -100, name: "Edmond", original_name: "Ronald Keeling", episode_run_time: [12], number_of_seasons: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchPersonSuccess({ media_type: "tv", poster_path: "path/to/file.ext", popularity: -5.48, id: 987650, overview: "Amazon River Dolphin", backdrop_path: ".", vote_average: -100, first_air_date: "2017-09-29T19:01:00.000", origin_country: ["PG"], genre_ids: [12, 12345, "a1969970175", 56784, 12], original_language: "George", vote_count: 100, name: "Pierre Edouard", original_name: "Ronald Keeling", episode_run_time: [56784], number_of_seasons: 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchPersonSuccess({ media_type: "movie", poster_path: "C:\\\\path\\to\\file.ext", adult: true, overview: "Sei Whale", release_date: "2017-09-29T19:01:00.000", genre_ids: [56784, 12345], id: 12, original_title: "Future Interactions Representative", original_language: "Michael", title: "International Intranet Coordinator", backdrop_path: "path/to/folder/", popularity: -5.48, vote_count: -100, video: false, vote_average: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchPersonSuccess({ media_type: "movie", poster_path: "", adult: true, overview: "", release_date: "", genre_ids: [], id: -Infinity, original_title: "", original_language: "", title: "", backdrop_path: "", popularity: -Infinity, vote_count: -Infinity, video: true, vote_average: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchPersonFailure", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchPersonFailure(200)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchPersonFailure("error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchPersonFailure("invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchPersonFailure(400)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchPersonFailure("too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchPersonFailure(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
