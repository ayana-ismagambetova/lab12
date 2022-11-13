console.log("Hello, World!");
let h1_array = document.getElementsByTagName("h1");
console.log(h1_array[0]);

//changed h1
let h = h1_array[0];
h.innerHTML = "Lab12 Assignment";
h.style.color = "blue";

//added hr
let hr = document.createElement("hr");
document.body.appendChild(hr);

//added h2
let h2 = document.createElement("h2");
h2.innerHTML = "Task";
h2.style.color = "red";
document.body.appendChild(h2);

//added paragraph1
let pr1 = document.createElement("p");
pr1.innerHTML = "In this task you have to reproduce this HTML page as is using <b> only </b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(pr1);

//added list1
let content = [
	"find elements in the DOM (<b>5 points</b>);",
	"create/add/remove elements (<b>5 points</b);",
	"change content of the elements (<b>5 points</b>);",
	"change styles of the elements (<b>5 points</b>);",
	"change attributes of the elements (<b>5 points</b>);",
	"change classes of the elements (<b>5 points</b>)."
	]


for (let j=0; j<content.length; j++) {
	
	let n = j%2;
	if (n==0) {
		var list1 = document.createElement("li");
		list1.innerHTML = content[j];
		list1.style.color = "green"
		document.body.appendChild(list1);
	}
	else {
		var list1 = document.createElement("li");
		list1.innerHTML = content[j];
		list1.style.color = "purple"
		document.body.appendChild(list1);
	}
	
}
console.log(content);

//added link
let a = document.createElement("a");
a.innerText = "link.";
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");

//added paragraph2
let pr2 = document.createElement("p");
pr2.innerText = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
pr2.appendChild(a);
document.body.appendChild(pr2);

//added hr2
let hr2 = document.createElement("hr");
document.body.appendChild(hr2);

//added h3
let h3 = document.createElement("h3");
h3.innerHTML = "Submission";
h3.style.color = "red";
document.body.appendChild(h3);

//added paragraph3
let pr3 = document.createElement("p");
pr3.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(pr3);

//added list2
let content2 = [
	"Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).",
	"Clone this repository to your local machine and work inside it.",
	"Create a new HTML file, called <b>index.html</b>, which has only tag one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).",
	"Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).",
	"Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).",
	"Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).",
	"After you finish your work, submit it to the Github (<b>2 points</b>)."
	]


for (let k=0; k<content2.length; k++) {
	
	let m = k%2;
	if (m==0) {
		var list2 = document.createElement("li");
		list2.innerHTML = content2[k];
		list2.style.color = "green"
		document.body.appendChild(list2);
	}
	else {
		var list2 = document.createElement("li");
		list2.innerHTML = content2[k];
		list2.style.color = "purple"
		document.body.appendChild(list2);
	}
	
}