<script setup>
import { ref } from 'vue';
import router from '../../router/router';

const count = ref(0)
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'">
            <div style="margin-top: -87px">
                <n-grid style="align-items: center;">
                    <n-gi :span="12">
                        <n-flex :justify="'center'">
                            <n-image :width="220" src="./my-website/GreenLightGo/home/app-home.png"
                                preview-disabled></n-image>
                        </n-flex>
                    </n-gi>
                    <n-gi :span="12">
                        <div>
                            <div class="slogan">Your ultimate tool for predicting traffic light timings.</div>
                            <div class="subtitle">With just a tap, you can know if you’ll make it through the next green
                                light, helping you save time and avoid frustration.</div>
                        </div>
                        <div>
                            <n-button type="primary" round class="startBtn" tag="a"
                                href="https://oscarlin7.github.io/my-website/app" target="_blank">
                                Start Here
                            </n-button>
                        </div>
                    </n-gi>
                </n-grid>
            </div>
        </n-flex>
    </div>
</template>

<style lang="less" scoped>
.content {
    width: 1200px;
    margin: 0 auto;
    padding: 24px;

    .n-image {
        border-radius: 3px;
    }

    .block1 {
        min-height: calc(100vh - 87px - 48px);

        .n-image {
            border: 2px solid black;
            box-shadow: var(--boxShadow-deep);
            border-radius: 20px;
        }

        .slogan {
            font-size: 36px;
            font-weight: bold;
            line-height: 1.4;
        }

        .subtitle {
            margin-top: 48px;
            margin-bottom: 24px;
            font-size: 18px;
        }

        .startBtn {
            margin-top: 12px;
        }
    }

    .block2 {
        min-height: 100vh;

        .n-grid {
            align-items: center;
        }
    }

    .block3 {
        min-height: 100vh;
    }
}
</style>