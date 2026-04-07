import { useEffect } from "react";
import { useState } from "react";

import Search from "./Components/Search";
import Results from "./Components/Results";
import CountryService from "./services/CountryService";

const App = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        let isMounted = true;
        CountryService.get().then((returned) => {
            if (isMounted) {
                setData(returned);
            }
        });

        const intervalID = setInterval(() => {
            CountryService.get().then((returned) => {
                isMounted && setData(returned);
            });
        }, 50000);

        return () => {
            clearInterval(intervalID);
            isMounted = false;
        };
    }, []);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);

        if (e.target.value) {
            let srch = "^" + e.target.value;
            let reg = new RegExp(srch, "i");

            setResults(
                data.filter((country) => {
                    if (country.name.common.search(reg) != -1) {
                        console.log(country.name.common);
                        return true;
                    } else {
                        return false;
                    }
                }),
            );
        } else {
            setResults([]);
        }
    };

    return (
        <div>
            <Search
                query={query}
                handleSearchChange={handleSearchChange}
            ></Search>

            <Results results={results}></Results>
        </div>
    );
};

export default App;
