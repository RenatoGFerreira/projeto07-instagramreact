import Stories from "./components/Stories"
import Posts from "./components/Posts"
import Sidebar from "./components/Sidebar"

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    <Stories />
                </div>
                <div class="posts">
                    <Posts />
                </div>
            </div>
            <div class="sidebar">
                <Sidebar />
            </div>
        </div>
    )
}