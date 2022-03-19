$("button").mousedown(function() {
  $(this).css("boxShadow", "0px 0px 20px 1px hsl(150deg 100% 66%)");
})
$("button").mouseup(function() {
  $(this).css("boxShadow", "");
})
$("button").click(getAdvice)
function getAdvice() {
  const url = "https://api.adviceslip.com/advice"
  receiveData(url)
  }
//get advice api data
const receiveData = async (url) => {
  const res = await fetch(url)
  try {
    const data = await res.json();
    $('p').html("Advice #" + data.slip.id);
    $('h1').html("“" + data.slip.advice + "”");
  } catch (error) {
    console.log('error', error)
  }
}
//on load
getAdvice();
