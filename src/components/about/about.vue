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
                    <n-text :depth="3" style="font-size: 18px">My name is Oscar Lin. I like watching Family Guy. Morbi
                        in condimentum fusce mollis gravida. Sagittis rutrum a cubilia
                        pretium aenean sodales pellentesque? Facilisi sociosqu porttitor viverra vitae tristique
                        adipiscing in. </n-text>
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
                        <h1>Integer aliquet feugiat interdum libero risus</h1>
                        <p>Vivamus quam nibh platea tempor; malesuada sagittis phasellus. Gravida mattis iaculis rutrum
                            mi sagittis vel duis dolor. Class condimentum semper aenean accumsan litora dictum. Sed
                            class eu congue integer placerat. Auctor volutpat ut taciti mi etiam. Quam vel tristique
                            duis varius porttitor mus quisque adipiscing.</p>
                        <p> Praesent diam elit congue, adipiscing cubilia
                            suspendisse odio. Sociosqu tincidunt lobortis conubia malesuada elementum enim. Convallis
                            tempus faucibus duis quam eros tempus dui penatibus!</p>
                        <h1>Mi massa at proin ullamcorper mi</h1>
                        <p>Ut class nisi nulla molestie ex curae fusce. Mus aliquet eros porttitor praesent curae dolor.
                            Ullamcorper ante nostra blandit porttitor primis justo massa. Sem ex sem venenatis mi ad.
                            Consectetur aliquet rhoncus curae bibendum phasellus ut tempor. Mattis ultrices etiam non;
                            donec torquent nullam. Erat sodales elementum; taciti vitae eleifend id tristique. Vivamus
                            eget nam nostra orci ac parturient eu. Condimentum rutrum integer consectetur nisl felis
                            curabitur fames mus.</p>
                    </n-gi>
                    <n-gi :span="8" :offset="2">
                        <n-flex>
                            <n-tag size="large">Sport Car</n-tag>
                            <n-tag size="large">HTML/CSS</n-tag>
                            <n-tag size="large">JavaScript</n-tag>
                            <n-tag size="large">Eu Cursus</n-tag>
                            <n-tag size="large">Commodo </n-tag>
                            <n-tag size="large">Purus Netus</n-tag>
                            <n-tag size="large">Leadership</n-tag>
                            <n-tag size="large">Phasellus</n-tag>
                            <n-tag size="large">Homework Killer</n-tag>
                            <n-tag size="large">UI Design</n-tag>
                            <n-tag size="large">Himenaeos</n-tag>
                            <n-tag size="large">Donec</n-tag>
                            <n-tag size="large">Peter</n-tag>
                            <n-tag size="large">Meg</n-tag>
                            <n-tag size="large">Stewie</n-tag>
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