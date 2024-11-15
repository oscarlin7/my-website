<script setup>
import { ref } from 'vue';

const block2 = ref(null);

const scrollToBottom = async (frame) => {
    window.scrollTo({ top: frame.clientHeight, behavior: "smooth" });
};
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'">
            <n-grid class="block1__inner">
                <n-gi :span="8">
                    <n-avatar class="avatar" :size="384" src="./my-website/GreenLightGo/about/avatar.jpg" />
                </n-gi>
                <n-gi :span="14" :offset="2">
                    <div style="font-size: 128px"><b>Hello!</b></div>
                    <n-text :depth="3" style="font-size: 18px">My name is Oscar Lin, and I am currently studying at
                        Chiway Repton School Xiamen. Although I am still uncertain about the specific career path or
                        university major I want to pursue, I am deeply passionate about science and technology.</n-text>
                    <div style="margin-top: 24px;">
                        <n-button type="primary" @click="scrollToBottom(block2)">
                            For more information
                        </n-button>
                    </div>
                </n-gi>
            </n-grid>
        </n-flex>
        <div ref="block2">
            <n-flex class="block2" :align="'center'">
                <n-grid class="block2__inner">
                    <n-gi :span="14">
                        <h1>Interests and Hobbies</h1>
                        <p>I have always been fascinated by technology, which is why I enjoy reading technical magazines
                            and watching videos about the latest developments in tech. I love trying to implement some
                            of the ideas and concepts that I come across, testing my abilities and expanding my
                            knowledge in the process. One of my key interests is sports cars, which might seem like a
                            personal hobby, but it’s also closely related to my passion for science and technology.
                        </p>
                        <p> Sports cars represent the cutting edge of engineering, design, and innovation. Every detail,
                            from aerodynamics to engine performance, is meticulously crafted, and the ability to
                            understand and appreciate this engineering fascinates me. Sports cars give me a practical
                            context for applying scientific principles and engineering concepts, which is why I am drawn
                            to them. The precision, speed, and technology behind these cars inspire me to think about
                            how I can contribute to such innovations in the future.</p>
                        <h1>Why I am Interested in STEM</h1>
                        <p>My interest in STEM (Science, Technology, Engineering, and Mathematics) stems from my
                            curiosity about how things work and how they can be improved. From a young age, I have
                            always been fascinated by the mechanics of machines, from simple gadgets to complex systems
                            like cars and computers. This curiosity naturally led me to explore more about the
                            technological developments happening around the world.</p>
                        <p>The idea that science and engineering
                            can solve real-world problems and make life better for everyone is something that drives me.
                            I’m especially interested in how technology can shape our future, making industries more
                            efficient, sustainable, and innovative. Whether it’s developing smarter devices, improving
                            transportation systems, or pushing the boundaries of artificial intelligence, I want to be a
                            part of these advancements. My passion for STEM is not just about understanding how things
                            work but about being able to contribute to creating something new and meaningful in the
                            field.</p>
                    </n-gi>
                    <n-gi :span="8" :offset="2">
                        <n-flex>
                            <n-tag size="large">Sport Car</n-tag>
                            <n-tag size="large">HTML/CSS</n-tag>
                            <n-tag size="large">JavaScript</n-tag>
                            <n-tag size="large">Science</n-tag>
                            <n-tag size="large">Engineering </n-tag>
                            <n-tag size="large">AI</n-tag>
                            <n-tag size="large">Web App</n-tag>
                            <n-tag size="large">Mathematics</n-tag>
                            <n-tag size="large">Technology</n-tag>
                            <n-tag size="large">UI Design</n-tag>
                        </n-flex>
                    </n-gi>
                </n-grid>
            </n-flex>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    width: 1200px;
    margin: 0 auto;
    padding: 24px;

    .block1 {
        min-height: calc(100vh - 87px - 48px);

        .block1__inner {
            margin-top: -87px;
            align-items: center;

            .avatar {
                border-radius: 12px;
                box-shadow: var(--boxShadow-deep);
            }
        }
    }

    .block2 {
        min-height: 100vh;

        .block2__inner {
            align-items: center;
        }
    }
}
</style>