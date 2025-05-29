import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoad=()=> {
    return (
        <div className={"w-full h-[30rem]  rounded-r-3xl mb-52 flex gap-5"}>
            <SkeletonTheme baseColor="#2458cf" highlightColor="#9ab5f3">
                <Skeleton height={400} width={400}/>
            </SkeletonTheme>
            <div className={"flex flex-col gap-5"}>
                <SkeletonTheme baseColor="#2458cf" highlightColor="#9ab5f3">
                    <Skeleton height={30} width={400} />
                </SkeletonTheme>

                <SkeletonTheme baseColor="#2458cf" highlightColor="#9ab5f3">
                    <Skeleton height={200} width={900} />
                </SkeletonTheme>

                <div className={"flex flex-wrap gap-5 items-center"}>
                    <SkeletonTheme baseColor="#2458cf" highlightColor="#9ab5f3">
                        <Skeleton height={30} width={100} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#2458cf" highlightColor="#9ab5f3">
                        <Skeleton height={30} width={100} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#2458cf" highlightColor="#9ab5f3">
                        <Skeleton height={30} width={100} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#2458cf" highlightColor="#9ab5f3">
                        <Skeleton height={30} width={100} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="#2458cf" highlightColor="#9ab5f3">
                        <Skeleton height={30} width={100} />
                    </SkeletonTheme>
                </div>

                <SkeletonTheme baseColor="#2458cf" highlightColor="#9ab5f3">
                    <Skeleton height={30} width={900} />
                </SkeletonTheme>
            </div>
        </div>
    );
}

export default SkeletonLoad;