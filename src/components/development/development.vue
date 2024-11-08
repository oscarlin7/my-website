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
            <div class="slogan"><b>Development<br /> History</b></div>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>December 7, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Himenaeos habitant curae tellus suscipit magna phasellus.</h2>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac morbi condimentum maximus torquent libero
                        lacinia hendrerit et. Pretium dui etiam ridiculus lobortis nam vitae massa justo aliquam.
                        Lacinia praesent conubia litora pharetra aptent inceptos mus. Accumsan dapibus orci torquent
                        facilisis ligula litora eleifend condimentum sed. Himenaeos semper lacinia suscipit parturient
                        senectus lacinia tortor.</p>
                    <h2>Aptent vulputate pellentesque nec ultrices pretium amet ornare et.</h2>
                    <p>Nec scelerisque vel consequat fusce libero nec lacinia egestas. Dictum primis eleifend vivamus
                        lacinia mattis; morbi ultricies convallis. Aptent tempor odio est felis blandit netus iaculis.
                        Interdum magnis vel velit nisl platea a. Pretium habitasse feugiat tincidunt magna mattis.
                        Suspendisse laoreet nam torquent quis dis ultrices sapien. Auctor volutpat in enim donec
                        habitant fringilla ligula augue rhoncus. Gravida platea fusce lectus porta molestie tortor
                        fusce. Purus netus accumsan diam dolor euismod pharetra. Euismod vel commodo; ipsum bibendum
                        nisl aptent laoreet cras.</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>November 27, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Fusce etiam maecenas ullamcorper eleifend integer mattis.</h2>
                    <p>Aptent ornare nascetur commodo aenean platea habitasse sodales. Vulputate interdum libero
                        suspendisse nam turpis. Aliquet integer sodales finibus; enim nostra porta. Aliquam varius
                        luctus vel; dolor quis vitae tincidunt. Eleifend commodo interdum erat in massa laoreet conubia
                        nostra. Curae cras purus laoreet vivamus taciti odio laoreet. Fermentum cras sagittis lectus sit
                        ex inceptos aliquet ultrices. Penatibus natoque fringilla at, dolor nostra primis netus.</p>
                    <h2>Fames quam augue id conubia massa mollis libero pulvinar erat.</h2>
                    <p>Penatibus maecenas felis sociosqu felis elementum vestibulum consequat efficitur. Adipiscing at
                        taciti lectus facilisis blandit risus. Vulputate torquent bibendum turpis ut varius nisi posuere
                        penatibus. Nam elit parturient commodo; fames natoque sodales parturient vivamus sed. Nisi
                        sodales nascetur quis fringilla semper. Class venenatis facilisis dapibus; ridiculus justo
                        himenaeos. Nunc libero torquent viverra augue hac nisl.</p>
                    <h2>Curae blandit netus convallis ullamcorper nascetur sed.</h2>
                    <p>Neque facilisi eleifend metus vel morbi phasellus mus arcu. Dignissim augue conubia mauris taciti
                        iaculis. Luctus ridiculus facilisis elementum; accumsan ante curabitur feugiat dis. Natoque
                        vulputate nibh id; mi vitae potenti aptent. Tincidunt class nascetur ac mollis aenean litora
                        placerat cubilia. Arcu fames ante nec lobortis turpis ligula tortor magnis. Mauris scelerisque
                        quis felis dolor donec eros nullam. Orci pellentesque fermentum luctus; tortor lobortis
                        himenaeos. Volutpat ad pretium malesuada nostra libero vivamus quam feugiat odio.</p>
                    <h2>Nam litora habitasse venenatis pretium luctus congue.</h2>
                    <p>Sapien quis mauris urna; est magna ut curae. Natoque pharetra felis consequat; mauris eu posuere
                        aliquet. Erat interdum ligula tempus id etiam arcu lacus. Imperdiet dignissim dictum purus quis
                        sodales ante magna curabitur. Ligula risus penatibus viverra dui dui sapien. Consectetur justo
                        hac accumsan posuere ultricies risus litora inceptos. Laoreet taciti fermentum potenti curae
                        libero fusce mauris tempor eros.</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>November 14, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Imperdiet per torquent senectus metus, scelerisque habitasse non cursus dis.</h2>
                    <p>Purus elementum consequat integer natoque lacus cursus. Curabitur ultrices arcu tortor, sodales
                        sem eleifend. Egestas litora cursus maecenas gravida ornare. Donec libero accumsan rutrum amet
                        porttitor parturient nulla efficitur? Himenaeos leo ridiculus proin conubia ultricies morbi.
                        Ornare senectus consectetur lacus et enim porta dictum. Ased mattis eros facilisi bibendum
                        tellus ante maecenas placerat. Taciti mus ipsum magna finibus vitae.</p>
                    <h2>Quisque in sapien magna leo orci ad aptent eros.</h2>
                    <p>Eget semper phasellus ut eu, feugiat sed. Dictum dictum viverra lobortis id bibendum nisi ipsum
                        cubilia. Nullam bibendum ridiculus tincidunt; nisi duis enim felis vel. Id tortor pharetra
                        sociosqu non nisi in. Netus eleifend rutrum aenean bibendum ad iaculis sagittis mus. Metus ex
                        diam tellus habitasse scelerisque.</p>
                    <h2>Placerat porta enim nascetur, accumsan elit platea.</h2>
                    <p>Pharetra egestas parturient phasellus curabitur proin ornare nam. Curabitur tempus erat augue sed
                        quam sodales fermentum imperdiet. Neque lacus taciti sapien in placerat. Praesent etiam id quam
                        ipsum maximus ipsum. Donec nascetur curae est quisque tincidunt cras. Condimentum sodales
                        cubilia sapien nullam; amet id mattis natoque. Mattis torquent amet facilisis neque netus
                        consectetur? Ac luctus maecenas habitant accumsan mus rhoncus convallis ligula. Lacinia lacus
                        est; arcu mauris nascetur non consequat imperdiet.</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>November 9, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Tempor finibus mauris vivamus quis; metus diam senectus dignissim.</h2>
                    <p>Erat accumsan praesent ad lacinia tortor nibh primis. Nulla purus imperdiet fringilla tristique
                        ad laoreet inceptos. Interdum fermentum purus ut fames tincidunt sodales. Tincidunt posuere
                        conubia dapibus consectetur nam habitasse. Avitae posuere nullam parturient in imperdiet; velit
                        odio volutpat. Sociosqu tincidunt consectetur sem ac primis; adipiscing blandit. Nam ultrices
                        sagittis luctus laoreet a ut nisl nibh. Massa fusce ultricies integer amet morbi egestas. Tortor
                        enim et diam; efficitur maximus aenean cras tempor. Morbi et imperdiet commodo ex venenatis
                        blandit.
                    </p>
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