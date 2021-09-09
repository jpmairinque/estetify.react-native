import React from "react";
import * as S from "./styles";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../styles/colors";
import { TouchableOpacity } from "react-native";

const SearchBar = () => {
  return (
    <S.SearchWrapper>
      <S.Bar />
      <TouchableOpacity>
        <Ionicons name="add" size={48} color={colors.lime} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="filter" size={30} color={colors.lime} />
      </TouchableOpacity>
    </S.SearchWrapper>
  );
};

export default SearchBar;
