import { ScrollView, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";
import Profile from "./Profile";

const bottomSpace = getBottomSpace();
export default (props) => {
  return (
    <ScrollView
      contentContainerStyle={{
        marginBottom: bottomSpace,
      }}
      showsVerticalScrollIndicator={false}
    >
      {props.data.map((item, index) => (
        <View key={index}>
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          ></Profile>
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  );
};
