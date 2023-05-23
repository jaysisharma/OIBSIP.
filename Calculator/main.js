        function display(val) {
            document.getElementById("result").value += val;
        }
        function calc() {
            let x = document.getElementById("result").value;
            let y = eval(x)
            document.getElementById("result").value = y;
        }
        function clr() {
            document.getElementById("result").value = "";
        }
        function back() {
            var value = document.getElementById("result").value;
            console.log(value)
            document.getElementById("result").value = value.slice(0, - 1);
        }
