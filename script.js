/*
поворот за мышкой

let triangle = document.getElementById('arrow');

function getTriangleCenter() {
    let x = triangle.offsetLeft + 50; // (50 + 50) / 2
    let y = triangle.offsetTop + 65; // 130 / 2
    return {
        x: x,
        y: y
    };
}

document.addEventListener('mousemove', function(e) {
    let triangleCenter = getTriangleCenter();
    let angle = Math.atan2(e.clientX - triangleCenter.x, -(e.clientY - triangleCenter.y)) * (180 / Math.PI);
    triangle.style.transform = 'rotate(' + angle + 'deg)';
});
*/

let paw = document.getElementById('paw');

document.addEventListener('mousemove', e => {
    paw.style.left = e.pageX - 200 + "px";
    paw.style.top = e.pageY - 50 + "px";
});