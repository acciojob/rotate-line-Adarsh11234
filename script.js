let angle = 0;
        function rotateLine() {
            angle += 2;
            document.getElementById('line').style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            requestAnimationFrame(rotateLine); // Smoother animation
        }
        requestAnimationFrame(rotateLine);