import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Logo } from '@/components/logo'
import { Nav } from '@/components/nav'

export default function Reels() {
  const { top } = useSafeAreaInsets()

  return (
    <>
      <View
        style={{ paddingTop: top }}
        className="flex-1">
        <View className="flex-1">
          <Logo size="12" className="w-44" />
          <View className="flex-1 items-center justify-center">
            <Text className="text-4xl">
              REELS
            </Text>
          </View>
        </View>
      </View>
      <Nav currentPath="reels" />
    </>
  )
}