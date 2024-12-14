let text = [
    `Exploration is the heartbeat of discovery. Venturing into the unknown brings stories that inspire and teach, carving memories that last forever. Whether it's scaling mountains, diving into the depths of oceans, or wandering through the woods, every journey enriches the soul.`,
    `Technology has woven itself into the fabric of our lives, reshaping how we connect, learn, and grow. From the dawn of the internet to the era of artificial intelligence, every advancement pushes humanity into an era of possibilities once thought impossible.`,
    `The rustle of leaves in the wind, the chirping of birds at dawn, and the roar of the ocean waves create a harmonious melody. Nature speaks to those who pause and listen, offering peace amidst the chaos of modern living.`,
    `Dreams fuel ambition, serving as a compass for life's journey. They remind us of what could be, urging us to overcome obstacles and seize opportunities. A dream, no matter how big or small, holds the power to transform reality.`,
    `Time is both fleeting and infinite. Each moment is a gift, offering a chance to learn, grow, or simply be. Reflecting on past experiences helps shape the path ahead, reminding us to cherish every second.`,
    `Knowledge is the key that unlocks countless doors. Every new concept mastered, every skill learned, adds to the arsenal of growth. Education, both formal and self-driven, shapes not just careers but character.`,
    `Across cultures, languages, and traditions, humanity shares a common thread. Embracing diversity enriches understanding, fostering a world where differences are celebrated and common ground is cherished.`,
    `Acts of kindness ripple far beyond their origin, touching lives in unexpected ways. Giving, whether through time, resources, or words, enriches both the giver and the receiver, creating a cycle of compassion.`,
    `Stories are the threads that bind humanity, passing wisdom and entertainment through generations. From campfire tales to cinematic epics, storytelling ignites imagination and forges connections across time.`,
    `Even in the darkest times, hope shines as a beacon of resilience. Challenges test the spirit, but perseverance and belief can turn adversities into opportunities for growth and triumph.`
 ];
 let submitBtn = document.querySelector('.btn');
 let space = document.querySelector('.lorem-text');
 let amount = document.querySelector('#amount');
 submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    space.innerHTML = '';
    for (let i = 0; i < amount.value; i++) {
        space.innerHTML += `<p>${text[i]}</p>`;
    }
 })
 