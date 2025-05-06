const inputs = document.querySelectorAll(".css-controller input");
inputs.forEach((inputs)=>inputs.addEventListener("change",update));

function update(){
    const suffixDate = this.dataset.sizzing || "";
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffixDate
    )
}