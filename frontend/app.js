function deploy() {

    const status = document.getElementById("deploymentStatus");

    status.innerText = "🚀 Deployment started...";

    setTimeout(() => {
        status.innerText = "✓ GitHub source retrieved";
    }, 1000);

    setTimeout(() => {
        status.innerText = "✓ Tests passed";
    }, 2000);

    setTimeout(() => {
        status.innerText = "✓ Docker image built";
    }, 3000);

    setTimeout(() => {
        status.innerText = "✓ Application deployed successfully 🚀";
    }, 4000);
}
