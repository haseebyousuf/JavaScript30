const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;
function handleCheck(e) {
    //check if shift key is down and they are checking the checkbox
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //loop over each checkbox
        checkboxes.forEach((checkbox) => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", handleCheck)
);
