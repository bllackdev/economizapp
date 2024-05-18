import { router } from "expo-router";
import { Text, View } from "react-native";

import LogoImg from "@/assets/logo.svg";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function Signin() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-600 p-8">
      <View className="mb-6 mt-10 items-center justify-center gap-2">
        <LogoImg width={100} height={100} />
      </View>

      <View className=" w-full items-center justify-center gap-3 px-8">
        <Text className="mb-3 font-heading text-2xl text-white">
          Acesse sua conta
        </Text>
        <Input
          placeholder="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Input placeholder="Senha" textContentType="password" secureTextEntry />
        <Button label="Acessar conta" />
      </View>

      <View className="mr-2 mt-1 flex w-full flex-row items-center justify-center px-8 ">
        <Text
          className="font-subtitle text-violet-500 underline"
          onPress={() => {}}
        >
          Esqueci minha senha
        </Text>
      </View>

      <View className="mt-3 flex w-full flex-row items-center justify-center gap-2 px-8">
        <Text className="font-body text-gray-200">Sua primeira vez aqui?</Text>
        <Text
          className="font-subtitle text-violet-500 underline"
          onPress={() => {
            router.navigate("/signup");
          }}
        >
          Cadastre-se
        </Text>
      </View>
    </View>
  );
}
