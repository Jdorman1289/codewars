// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {

    let answer = {};

    if (string === "") {
        return {};

    } else {
        let letters = string.split("");
        let count = 0;

        letters.forEach(character => {
            answer[letters[count]] = string.split(character).length - 1;
            count++;
        });
    }

    return answer;
}


console.log(count("abcccb"));
console.log(count(""));