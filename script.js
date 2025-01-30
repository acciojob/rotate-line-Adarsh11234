//your JS code here. If required.
 let angle = 0;
        function rotateLine() {
            angle += 2;
            document.getElementById('line').style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }
        setInterval(rotateLine, 20);
