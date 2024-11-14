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
                <n-gi :span="12">
                    <div class="slogan"><b>I REALLY HATE<br /> WAITING AT <span style="color: red">RED</span>
                            LIGHT</b></div>
                </n-gi>
                <n-gi :span="10" :offset="2">
                    <h2>Why did I make this?</h2>
                    <p>It all started with a frustrating experience in my hometown of Xiamen. There is a traffic light
                        near my building, where the pedestrian green light lasts much shorter than the red light, and
                        there is no clear indication of the remaining seconds. </p>
                    <p>This created several problems for me:
                        when I was some distance away from the light, I often didn’t know whether I should rush to catch
                        the green light or wait it out. Additionally, the long waiting time during the red light would
                        waste valuable minutes, leaving me feeling irritated and frustrated.</p>
                    <p>
                        These everyday issues inspired me to create <b>GreenLight
                            Go</b>, a tool that helps predict whether you
                        can make the next green light, saving time and reducing unnecessary stress.</p>
                    <h2>Mission</h2>
                    <p>My mission is simple: to reduce waiting time at traffic lights and make your journey more
                        efficient. I aim to leverage technology to make city traffic smarter and more convenient for
                        everyone.</p>
                    <n-button style="margin-top: 12px" type="primary" round @click="scrollToBottom(block2)">
                        Scroll Down
                    </n-button>
                </n-gi>
            </n-grid>
        </n-flex>
        <div ref="block2">
            <n-flex class="block2" :align="'center'">
                <n-grid class="block2__inner">
                    <n-gi :span="10">
                        <h1>Design Details</h1>
                        <p>The app’s design process focuses on seamless user experience and integration with existing
                            infrastructure. QR codes are placed on existing traffic lights for users to scan.</p>
                        <h2>Red light:</h2>
                        <p>The app displays the remaining time for the red light in real time. Below this, there’s a
                            "hurry up" button, which users can press to show their impatience. The app tracks how many
                            people press this button and reports the data to Xiamen traffic authority.
                        </p>
                    </n-gi>
                    <n-gi :span="14">
                        <n-flex :justify="'right'">
                            <n-flex vertical>
                                <n-image style="border-radius: 12px" :width="560"
                                    src="./my-website/GreenLightGo/mission/mission.png" preview-disabled></n-image>
                                <n-flex :justify="'center'">
                                    <n-text :depth="3">Neque dui quam pretium matti elementum.</n-text>
                                </n-flex>
                            </n-flex>
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

            .slogan {
                font-size: 96px;
                line-height: 86px;
                letter-spacing: -0.075em;
                word-spacing: 0em;
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