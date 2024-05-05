let arrayVideos = [];
console.log('\n'.repeat(50));
const links = document.querySelectorAll('a');
for (const link of links) {
    if (link.id === "video-title-link") {
        arrayVideos.push(`- [ ] ${link.title} [Link](${link.href})`);
    }
}
console.log(arrayVideos.join('\n'))