let resultsOut = document.getElementById("resultsOut")
        let mainOut = document.getElementById("mainOut")
        let searchBtn = document.getElementById("searchBtn")
        let searchValue = document.getElementById("searchValue")
        document.getElementById("loader").style.display = "none"
        searchBtn.addEventListener("click", () => {
            resultsOut.innerHTML = "";
            document.getElementById("loader").style.display = "block"
            let xhr = new XMLHttpRequest()
            xhr.open("get", `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue.value}`, true)
            xhr.onload = function () {
                reslts = JSON.parse(this.response)
                resultDefinitions = reslts[0].meanings[0].definitions;
                if (resultDefinitions.length > 1 && (this.status = 200)) {
                    document.getElementById("loader").style.display = "none"
                    resultExample = reslts[0].meanings[0].example;
                    resultDefinitions.forEach(definitions => {
                        resultsOut.innerHTML += `<li>${definitions.definition}</li>`
                    });
                }
            }
            xhr.send()
        })
        document.querySelector('form').addEventListener("submit", (e) => {
            e.preventDefault()
            document.getElementById("loader").style.display = "block"
            resultsOut.innerHTML = "";
            let xhr = new XMLHttpRequest()
            xhr.open("get", `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue.value}`, true)
            xhr.onload = function () {
                reslts = JSON.parse(this.response)
                resultDefinitions = reslts[0].meanings[0].definitions;
                if (resultDefinitions.length > 1 && (this.status = 200)) {
                    document.getElementById("loader").style.display = "none"
                    resultExample = reslts[0].meanings[0].example;
                    resultDefinitions.forEach(definitions => {
                        resultsOut.innerHTML += `<li>${definitions.definition}</li>`
                    });
                }
            }
            xhr.send()
        })