flatpickr("#birthday", {
    dateFormat: "d-m-Y",
    maxDate: "today",
    locale: "tr"
});
const DateTime = luxon.DateTime;

const birthday = document.querySelector("#birthday");
const calculateBtn = document.querySelector("#calculate-btn");
const result = document.querySelector("#result");

calculateBtn.addEventListener("click", () => {
    let birthdayValue = birthday.value;

    if (!birthdayValue) {
        alert("Lütfen bir tarih seçin!");
        return;
    }

    const dogumGunu = DateTime.fromFormat(birthdayValue, "dd-MM-yyyy");
    const simdi = DateTime.now();

    const fark = simdi.diff(dogumGunu, ["years", "months", "days"]).toObject();

    result.innerHTML = `Yaşınız: ${Math.floor(fark.years)} Yıl, ${Math.floor(fark.months)} Ay ve ${Math.floor(fark.days)} Gün.`;
});
