import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Swiper, SwiperItem, Video } from "@tarojs/components";
import { banner_url } from "@/api";
import "./main.scss";

interface Banner {
    state: {
        bannerUrl: string;
    };
}

class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bannerUrl: "https://qiniu.jevons.xyz/video.mp4"
        };
    }

    componentWillMount() {
        banner_url().then((r:any) => {
            console.log("urlBanner", r.data);
            if(r.data.code==="1000") {
                this.setState({
                    bannerUrl: r.data.msg
                });
            }
        });
    }

    // 样式用全局要加这个
    static options = {
        addGlobalClass: true
    };

    render() {
        console.log("urlBanner2", this.state.bannerUrl);
        return(
            <View className="banner-style my-3" onClick={this.toPage.bind(this, "newsItem")}>

                <Video
                    className="video"
                    src={this.state.bannerUrl}
                    controls={false}
                    autoplay={true}
                    // loop={true}
                    muted={true}
                    objectFit="cover"
                />

                <View className="text-view">
                    <Text className="title">Astronauts Tranin for the Boeing Crew Flight Test</Text>
                    <Text className="date">2019-05-05</Text>
                </View>

            </View>
        );
    }

    /**
     * @desc 跳转带值 这个传值现在靠mobx 不知道怎么直接给。。。 这个taro文档。。。
     * @param {object} newsItem newsItem
     */
    toPage(newsItem) {
        // const { whichNews } = this.props;
        // whichNews.params = newsItem;
        // Taro.navigateTo({
        //     url: "/pages/article-item/index"
        // });
    }
}

export default Banner;
