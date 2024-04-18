var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {
for (var i = 0; i < 20; i++) {
	// Return a value from 1 to 100 (both inclusive)
	var value = Math.ceil(Math.random() * 100);

	// Creating element div
	var array_ele = document.createElement("div");

	// Adding class 'block' to div
	array_ele.classList.add("block");

	// Adding style to div
	array_ele.style.height = `${value * 3}px`;
	array_ele.style.transform = `translate(${i * 30}px)`;

	// Creating label element for displaying
	// size of particular block
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;

	// Appending created elements to index.html
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
}
}

async function SelectionSort(delay = 100){
    var blocks = document.querySelectorAll(".block");
    var min_ind = 0;

    for(var i=0;i<blocks.length;i++){
        min_ind = i;
        blocks[i].style.backgroundColor = "#1870b4";

        for(var j=i+1;j<blocks.length;j++){
            blocks[j].style.backgroundColor = "#FF4949";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                },300)
            );

            var val1 = parseInt(blocks[j].childNodes[0].innerHTML);
            var val2 = parseInt(blocks[min_ind].childNodes[0].innerHTML);

            if(val1<val2){
                if(min_ind!== i){
                    blocks[min_ind].style.backgroundColor = "#FF4949";
                }
                min_ind = j;
            }else{
                blocks[j].style.backgroundColor = "#1870b4";
            }
        }
    
        var temp1 = blocks[min_ind].style.height;
        var temp2 = blocks[min_ind].childNodes[0].innerHTML;
        blocks[min_ind].style.height = blocks[i].style.height;
        blocks[i].style.height = temp1;
        blocks[min_ind].childNodes[0].innerText = blocks[i].childNodes[0].innerText;
        blocks[i].childNodes[0].innerText = temp2;

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            },300)
        );

        blocks[min_ind].style.backgroundColor = "#1870b4";
        blocks[i].style.backgroundColor = "#13CE66";
    }
}

generatearray();