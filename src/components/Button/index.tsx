import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
}

export function Button({title, variant = 'solid', ...rest}: Props) {
  return (
    <ButtonNativeBase
      {...rest}
      bg={variant === "outline" ? "transparent" : "green.700"}
      h={14}
      w="full"
      px={4}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={variant === "outline" ? "green.700" : "transparent"}
      rounded="sm"
      _pressed={{ bg: variant === "outline" ? "gray.500" :"green.500" }}
      mb={4}
    >
      <Text color="white" fontFamily="heading" fontSize="sm">{title}</Text>
    </ButtonNativeBase>
  )
}