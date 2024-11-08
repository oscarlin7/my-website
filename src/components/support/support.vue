<script setup>
import { ref } from 'vue';

const block2 = ref(null);

const scrollToBottom = async (frame) => {
    window.scrollTo({ top: frame.clientHeight, behavior: "smooth" });
};
</script>

<template>
    <div class="content">
        <n-flex :align="'center'">
            <div class="slogan"><b>Public Support</b></div>
            <n-grid>
                <n-gi :span="8">
                    <h2>Xiamen Gongan<br /> Traffic Management Bureau</h2>
                    <n-flex vertical :size="4">
                        <div>
                            <n-text :depth="3">
                                Telephone: +86 592 586 6010
                            </n-text>
                        </div>
                        <div>
                            <n-text :depth="3">
                                Address: No.8, Lianqian Residential District Lianqian West Road, Xiamen,
                                Fujian
                            </n-text>
                        </div>
                    </n-flex>
                </n-gi>
                <n-gi :span="14" :offset="2">
                    <h2>Himenaeos habitant curae tellus suscipit magna phasellus.</h2>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac morbi condimentum maximus torquent libero
                        lacinia hendrerit et. Pretium dui etiam ridiculus lobortis nam vitae massa justo aliquam.
                        Lacinia praesent conubia litora pharetra aptent inceptos mus. Accumsan dapibus orci torquent
                        facilisis ligula litora eleifend condimentum sed. Himenaeos semper lacinia suscipit parturient
                        senectus lacinia tortor.</p>
                    <h2>Aptent nec pretium amet ornare et.</h2>
                    <p>Nec scelerisque vel consequat fusce libero nec lacinia egestas. Dictum primis eleifend vivamus
                        lacinia mattis; morbi ultricies convallis. Aptent tempor odio est felis blandit netus iaculis.
                        Interdum magnis vel velit nisl platea a. Pretium habitasse feugiat tincidunt magna mattis.
                        Suspendisse laoreet nam torquent quis dis ultrices sapien. Auctor volutpat in enim donec
                        habitant fringilla ligula augue rhoncus. Gravida platea fusce lectus porta molestie tortor
                        fusce. Purus netus accumsan diam dolor euismod pharetra. Euismod vel commodo; ipsum bibendum
                        nisl aptent laoreet cras.</p>
                    <h2>Nibh porta luctus praesent aptent ipsum.</h2>
                    <p>Ultricies senectus interdum tellus pharetra fringilla aliquet dignissim tellus. Egestas ridiculus
                        varius netus netus odio semper. Nunc ligula lectus scelerisque ac, lorem elit consequat
                        malesuada aenean? Sociosqu nullam magnis blandit semper, mattis dictumst viverra augue. Leo
                        pretium condimentum massa sem mattis lobortis curae. Pulvinar metus torquent cursus proin diam
                        proin est scelerisque. Vel eros metus natoque ex rhoncus tortor. Maximus cras lectus dolor
                        ultricies dui mattis. Rutrum lacinia pulvinar nec magna feugiat metus.</p>
                    <p>Posuere gravida orci aenean justo id! Sed vehicula mi ex diam maximus luctus litora. Neque ex
                        rhoncus bibendum integer sociosqu quam litora. Non commodo in sociosqu etiam fringilla.
                        Ridiculus primis erat magnis, pellentesque ullamcorper non. Sociosqu semper fringilla dapibus
                        aenean quam finibus habitant.</p>
                </n-gi>
            </n-grid>
        </n-flex>
    </div>
</template>

<style lang="less" scoped>
.content {
    width: 1200px;
    margin: 0 auto;
    padding: 24px;

    .slogan {
        font-size: 96px;
        line-height: 86px;
        letter-spacing: -0.075em;
        word-spacing: 0.1em;
        margin-bottom: 42px;
    }
}
</style>