
    let sum=0;

const f4 = () => {
    let amountBtn1=1;
    // שלוף את כל הנתונים
    let str = sessionStorage.getItem("data_sal");
    // המרה לג'סון
    let arr = JSON.parse(str);
    console.log("Parsed data:", arr);

    // צור אלמנט טבלה וגוף טבלה
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    // עבור כל אלמנט במערך, צור שורה עם 3 עמודות
    arr.forEach(element => {
        
        let num=document.createElement('h5')
        
        let tr = document.createElement('tr'); // יצירת שורת טבלה
        // עמודת תמונה
        let tdImg = document.createElement('td'); // יצירת תא טבלה לתמונה
        let cartPic = document.createElement('div');
        let img = document.createElement('img');
        img.src = `./תמונות יין/${element.src}`;
        img.style.width = '50%'; // רוחב התמונה בתוך התא
        cartPic.append(img);
        cartPic.classList.add('card-item');
        tdImg.append(cartPic); // הוספת ה-div לתא הטבלה
        tr.append(tdImg); // הוספת תא הטבלה לשורה

        // עמודת פרטים ()
        let tdDetails = document.createElement('td'); // יצירת תא טבלה ריק
        tdDetails.innerText=element.תיאור+"  "+element.מחיר+" ₪"
        tdDetails.classList.add('extra-info'); // ניתן להוסיף מחלקה לעיצוב
        tr.append(tdDetails); // הוספת תא הטבלה הריק לשורה

        // עמודה נוספת לכמות
        let tdEAmount = document.createElement('td'); // - עמודה נוספת- יצירת תא טבלה ריק
        tdEAmount.innerText='כמות'  //יצירת כפתור + להוספת כמות מהמוצר
         //יצירת כפתורים לעמודת הכמות
        let btnPlus=document.createElement('button')
        btnPlus.innerText='+'

        btnPlus.addEventListener('click',() =>{
            amountBtn1++;
            num.innerText=amountBtn1
             tdEAmount.appen(num);
             let gj=parseInt(element.מחיר)
             alert(gj)
             sum+=gj*amountBtn1;
        })

        let btnMinus=document.createElement('button')
        btnMinus.innerText='-'
        btnMinus.addEventListener('click',() =>{
            amountBtn1--;
            num.innerText=amountBtn1
             tdEAmount.appen(num)
             sum+=parseInt(element.מחיר) ;
        })
        num.innerText=amountBtn1
      //  tdEAmount.appendChild(h5)

      sum+=parseInt(element.מחיר) ;

        tdEAmount.append(btnPlus,btnMinus,num)//אימוצם שעמודה החדשה של הכמות
        tdEAmount.classList.add('extra-amount'); // ניתן להוסיף מחלקה לעיצוב
        tr.append(tdEAmount); // הוספת תא הטבלה הריק לשורה

        tbody.append(tr); // הוספת השורה לגוף הטבלה
    });

    table.append(tbody); // הוספת גוף הטבלה לטבלה
    table.style.width = '50%'; // הגדרת רוחב הטבלה לחצי עמוד
    table.style.margin = 'auto'; // מיקום הטבלה במרכז הדף
    document.body.append(table); // הוספת הטבלה לגוף המסמך

    //יצירת כפתור לסיום הקניה
    let btnSubmit=document.createElement('button')
    btnSubmit.style.width='10%'
    // let cl=document.createElement('div')
    btnSubmit.innerText="סיום קניה"
    btnSubmit.classList.add('btn-submit')
    document.body.append(btnSubmit)


    // הוספת מאזין אירועים לכפתור סיום הקניה
    btnSubmit.addEventListener('click', completePurchase);
}
// const add = () =>{

// }

 function completePurchase() {
    let ne=sessionStorage.getItem("curent_user_name")
    if(ne==null){
        let h1=document.createElement('h1')
        h1.innerText='בבקשה הירשם/הירשם לפני ביצוע ההזמנה'
        document.body.append(h1)
        setTimeout(()=>{
            window.location='./user.html'
        },3000)
    }
    else {
        
    //    alert("הקניה הסתימה בהצלחה!  "+`${ne}`);
        alert(" מחיר לתשלום" +`${sum}`);
    }

}

 
   