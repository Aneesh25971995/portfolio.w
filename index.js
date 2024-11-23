function sendMail(){
    var params ={
        Name:document.getElementById("Name").value,
        Email:document.getElementById("Email").value,
        Message:document.getElementById("Message").value,
    };

const serviceID="service_6re3t3r";
const templateID="template_q1p6m5k";

emailjs
.send(serviceID,templateID,params)
.then((res) => {
        document.getElementById("Name").value="";
        document.getElementById("Email").value="";
        document.getElementById("Message").value="";
        console.log(res);
        alert("your message sent succesfully");
    })
    .catch((err) => console.log(err));

}    