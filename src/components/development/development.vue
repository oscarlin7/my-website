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
                    <h2>December 11, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Completing and Launching the First Version of My Web App</h2>
                    <p>Today marks an exciting milestone: I completed the first version of my web app and officially
                        published it on GitHub Pages! This version focuses on a single traffic light, which simplifies
                        the project and allowed me to avoid using a backend or database. Instead, I decided to rely on a
                        JSON file to store the traffic light’s data, making the app lightweight and easy to manage</p>
                    <h4>How It Works:</h4>
                    <ol>
                        <li>
                            <h4>Recording Traffic Light Cycles:</h4>
                            <p>I started by observing and recording a complete cycle of the traffic light near my home.
                                Using a video recording, I captured how long the red and green lights lasted during one
                                full cycle. Since it’s impossible to monitor the traffic light for 24 hours straight, I
                                recorded specific instances whenever I passed by the intersection. At home, I documented
                                these observations into a JSON file, for example:</p>
                            <ul>
                                <li>16:28:07: Green light begins.</li>
                                <li>16:28:32: Switches to red light.</li>
                                <li>16:30:14: Switches back to green light.</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Using JSON for Predictions:</h4>
                            <p>The JSON file acts as a database of time-stamped records for red and green light changes.
                                When a user opens the app, it checks the JSON file for data matching the current time.
                                If no exact match exists, the app uses the default traffic light durations and the
                                closest recorded time to estimate the current state and the remaining time before the
                                light changes.</p>
                        </li>
                        <li>
                            <h4>Gradual Improvement:</h4>
                            <p>By adding more records to the JSON file over time, the app becomes increasingly accurate.
                                This iterative approach ensures that the app gets better without needing a backend or
                                third-party API, keeping it simple and completely under my control.</p>
                        </li>
                    </ol>
                    <p>This method allows me to avoid complex integrations with sensitive APIs or external data sources,
                        making the app fully independent. It also means I can continue improving the app at my own pace
                        while learning more about how to structure and utilize data effectively.</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>December 8, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Enhancing Traffic Light State Prompts</h2>
                    <p>On December 8, 2024, I made further progress on my app by refining the text prompts displayed at
                        the bottom of the screen for different traffic light states. These prompts are designed to guide
                        users with clear and helpful instructions based on the current light state.</p>
                    <h4>Green Light Logic:</h4>
                    <p>While working on the green light state, I realized it needed more than just the basic "Please
                        Cross" message. I added a crucial logic check to account for scenarios where, even though the
                        green light hasn’t ended, it’s no longer safe to cross.</p>
                    <p>Here’s how it works:</p>
                    <ul>
                        <li>
                            <p><b>"请通行 Please Cross"</b>: This is the default message displayed during a green light
                                when
                                there is enough time to cross safely.</p>
                        </li>
                        <li>
                            <p><b>"无法通行 Unable to Cross"</b>: If the user reaches the crosswalk but doesn’t have enough
                                time
                                to safely make it to the other side before the light turns red, the app displays this
                                warning instead. This ensures users don’t start crossing when it’s unsafe, helping them
                                avoid risky situations.</p>
                        </li>
                    </ul>
                    <p>Today’s update significantly improves the app’s usability by combining practical logic with
                        user-friendly guidance. These prompts ensure users can make informed decisions about whether or
                        not to cross, adding another layer of functionality and safety to the app.</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>December 4, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Simplifying My Project: Focusing on One Intersection</h2>
                    <p>On December 4, 2024, I made the tough but necessary decision to scale back the scope of my
                        project. Instead of building a city-wide "Green Light Go" app, I shifted my focus to just the
                        pedestrian traffic light near my home. This change made the project much more manageable, as I
                        only needed to record detailed information about this single traffic light.</p>
                    <p>With this simplified scope, I could focus entirely on perfecting the app’s core functionality
                        rather than worrying about data integrations or large-scale implementations.</p>
                    <h4>Key Functionalities:</h4>
                    <p>Before diving into the detailed recording of traffic light transitions, I first needed to
                        complete the app’s main logic. The critical distinction lies in how the app handles red light
                        and green light states:</p>
                    <ol>
                        <li>
                            <h4>Red Light State:</h4>
                            <p>During a red light, the app simply displays a countdown timer showing the remaining time
                                until the light changes. This straightforward feature ensures users know exactly how
                                long they need to wait.</p>
                        </li>
                        <li>
                            <h4>Green Light State:</h4>
                            <p>The green light state is the heart of my app. In addition to the countdown, I added a
                                feature that calculates and displays how much distance I have left before reaching the
                                crosswalk’s starting point and whether I can safely cross before the light turns red.
                                This functionality helps users make quick, informed decisions.</p>
                        </li>
                    </ol>
                    <p>Now I successfully implemented the basic traffic light display. The app now shows the red light
                        countdown and automatically switches to the green light state when the countdown ends. It felt
                        amazing to see the logic come together and work seamlessly. This marks a significant milestone
                        in my project as the app begins to take shape!</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>November 27, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>The Challenge of Accessing Traffic Light Data</h2>
                    <p>Over the past two weeks, I’ve been working tirelessly to secure an interface for my app. My
                        original plan was to collaborate with the Xiamen Traffic Bureau to gain access to their traffic
                        light data. This would have allowed my app to automatically switch to the nearest pedestrian
                        traffic light based on the user’s location. Unfortunately, this idea didn’t pan out as I had
                        hoped.</p>
                    <h4>Why It Didn’t Work</h4>
                    <p>Being a minor, I encountered a significant barrier: the Traffic Bureau didn’t trust that I could
                        safely manage and use their sensitive data. Even if I were granted access, I would have needed
                        to pay an expensive security deposit to use their system. This was a cost I simply couldn’t
                        afford.</p>
                    <p>To explore alternatives, I researched companies that have successfully integrated traffic
                        systems, like Gaode Maps (AutoNavi), Tencent Maps, and Baidu Maps. Sadly, I discovered that
                        these companies also pay large deposits to access traffic data interfaces, and the APIs they
                        offer are restricted. Among them, Baidu Maps does provide APIs, but they’re only available to
                        businesses, not individuals like me.</p>
                    <h4>Refocusing My Efforts</h4>
                    <p>Faced with these challenges, I had to let go of the idea of collaborating with the Traffic
                        Bureau. It was disappointing, but I decided not to let this setback stop me. Instead, I shifted
                        my focus back to what I could achieve on my own. My goal now is to complete the app, even if it
                        only serves me as its primary user.</p>
                    <h4>Why I’m Still Motivated</h4>
                    <p>Despite the obstacles, I believe in the value of this app. Even without access to live traffic
                        data, it can still help me manage my mornings better by providing a structured and personalized
                        experience. This project is no longer just about functionality—it’s about pushing myself to see
                        it through, learning along the way, and proving that I can create something meaningful.</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>November 15, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Building a Single-Page Vue Application</h2>
                    <p>I used Vue Router to build a single-page application (SPA) that serves as a promotional platform
                        for my app. The SPA includes five key pages: Home, Mission, Development History, About, and a
                        special "Public Support" page. This setup allows users to easily navigate between sections
                        without reloading the entire page, offering a smooth user experience.</p>
                    <p>The "Home" page serves as an introduction to the app, while the "Mission" page outlines the app's
                        goals and the problem it aims to solve. The "Development History" page provides a detailed
                        account of the app's creation, and the "About" page offers information about me and my work. The
                        "Public Support" page is dedicated to seeking the support of the Xiamen Traffic Bureau. This
                        page highlights my plan to place QR codes on traffic lights, which users can scan to access the
                        app—this will be the app’s primary promotional method. However, before proceeding, I need to
                        secure the approval of the traffic bureau to implement this idea.</p>
                    <p>By using Vue Router, I was able to organize the application’s pages efficiently, providing users
                        with an intuitive navigation experience.</p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>November 10, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Completing the Interface Design</h2>
                    <p>I used the HTML, CSS, and JavaScript skills I had learned to complete the basic interface for my
                        app. However, I encountered several technical challenges along the way.</p>
                    <h3>Challenge 1</h3>
                    <p>One issue I faced was choosing the right font for the countdown digits. After searching online, I
                        found the "digital-7" font, which matched the style of the countdown timer on real traffic
                        lights. However, I noticed that the number "1" had a different width compared to the other
                        digits, which made the display look inconsistent. After some more searching, I found the "E1234"
                        font, which resolved the issue and gave me a consistent look across all digits.</p>
                    <h3>Challenge 2</h3>
                    <p>Another challenge was designing the traffic light itself. Initially, I tried using containers
                        with background colors and border-radius to represent the lights, but the result didn't match my
                        expectations. In the end, I decided to use Photoshop to extract the traffic light image from a
                        photo and then applied CSS positioning to overlay the countdown numbers on the image. This
                        solution gave me the precise look I was aiming for and successfully recreated the traffic light
                        style.
                    </p>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>November 3, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Website Deployment Using GitHub Pages</h2>
                    <p>I successfully deployed my website using GitHub Pages. This process involved utilizing GitHub
                        Actions to automate the deployment pipeline, ensuring seamless updates and deployment to the
                        hosting environment. The website itself is built using Vue.js, which allows for the development
                        of reactive, modern web applications with a smooth user experience.
                    </p>
                    <p>The decision to host the website on GitHub Pages was driven by several factors:</p>
                    <ol>
                        <li>
                            <p><b>Free Hosting and Integration with GitHub</b>: GitHub Pages provides a free, reliable
                                platform
                                for hosting static websites, which is ideal for this project since it does not require a
                                complex server-side infrastructure. The integration with GitHub made it easier to manage
                                version control and the deployment process.</p>
                        </li>
                        <li>
                            <p><b>Automation with GitHub Actions</b>: GitHub Actions allowed me to automate the
                                deployment
                                process, making it efficient and error-free. With each commit to the repository, GitHub
                                Actions automatically builds and deploys the site to GitHub Pages, ensuring that the
                                website
                                is always up to date without manual intervention.</p>
                        </li>
                        <li>
                            <p><b>Vue.js Compatibility</b>: GitHub Pages is well-suited for static websites, and since
                                my
                                site is built with Vue.js, which compiles down to static assets (HTML, CSS, JavaScript),
                                it
                                fits perfectly with GitHub Pages' capabilities.</p>
                        </li>
                    </ol>
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid :x-gap="24">
                <n-gi :span="6">
                    <h2>October 27, 2024</h2>
                </n-gi>
                <n-gi :span="18">
                    <h2>Conceptualizing the App</h2>
                    <p>I started reflecting on areas in my life where I could make improvements. During this reflection,
                        I noticed a persistent issue with a traffic light near my home. Specifically, the green light
                        duration for pedestrians is much shorter than the red light, and there is no clear indication of
                        how many seconds remain on the green light. This created problems for me, as I often found
                        myself unsure whether I should rush to cross when I was still some distance away from the light.
                        Additionally, the long red light durations led to a lot of wasted time, causing frustration and
                        stress.</p>
                    <h2>Planing the App</h2>
                    <p>To address this, I decided to develop an app that could help people better manage their time at
                        traffic lights by providing real-time information about the light durations. The app would be
                        easily accessible, and I wanted to keep its maintenance costs low. After considering various
                        options, I chose to develop the solution as a web app. This would allow it to be accessible from
                        any device without the need for complex installations or high maintenance overhead.</p>
                    <p>The main objective of this app would be to offer a simple and intuitive interface, helping users
                        know when it’s safe to cross and how long they might have to wait, reducing unnecessary
                        frustration and improving the overall experience.</p>
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