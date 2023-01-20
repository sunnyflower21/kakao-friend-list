import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { friendProfiles, myProfile } from "./src/data";
import Division from "./src/Division";
// import FriendList from "./src/FriendList";
import FriendSection from "./src/FriendSection";
import Header from "./src/Header";
import Margin from "./src/Margin";
import Profile from "./src/Profile";
import TabBar from "./src/TabBar";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );
  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  );
  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
        <FlatList
          //들어갈 데이터
          data={isOpened ? friendProfiles : []}
          //컨테이너 스타일
          contentContainerStyle={{ paddingHorizontal: 15 }}
          //인덱스 넣어주면 됨 . _(언더바) 쓰면 보통 안쓴다는 거
          keyExtractor={(_, index) => index}
          // 헤더 안움직이게 하고싶을때 인덱스 넣어줌 . 배열 지금은 헤더가 하나라 0
          stickyHeaderIndices={[0]}
          //아이템 분리선
          ItemSeparatorComponent={ItemSeparatorComponent}
          //어케 된더헐 지
          renderItem={renderItem}
          //리스트 위에
          ListHeaderComponent={ListHeaderComponent}
          //리스트 아래
          ListFooterComponent={ListFooterComponent}
          //인디테이터
          showsVerticalScrollIndicator={false}
        />
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );

  // return (
  //   <View style={styles.container}>
  //     <View
  //       style={{
  //         flex: 1,
  //         paddingHorizontal: 15,
  //       }}
  //     >
  //       <FriendList data={friendProfiles} isOpened={isOpened} />
  //     </View>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
