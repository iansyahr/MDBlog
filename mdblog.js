import marked from 'marked'
import katex from 'katex';
import highlight from 'hightlight.js'

function renderMath(text) {
    return text.replace(/(\$\$)(.*?)(\$\$)|(\$)(.*?)(\$)/g, (match, p1, p2, p3, p4, p5, p6) => {
        let equation, displayMode;
        if (p1) {
            equation = p2;
            displayMode = true;
        } else {
            equation = p5;
            displayMode = false;
        }
        try {
            return katex.renderToString(equation, { displayMode: displayMode });
        } catch (err) {
            console.error(err);
            return match; // return the original string in case of an error
        }
    });
}


function mdblog(input){
    let markedResult = marked.parse(input)
    let katexResult = renderMath(markedResult)
    return katexResult
}

let setOption = {
    author : "Muhamad Apriansyah Ramadhan",
    photoProfile : "",
    date : "",
    description: "",
    photoDescription: "",
    font : 'Arial',
}
