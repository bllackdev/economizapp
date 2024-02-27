import { useToken } from "native-base";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import "dayjs/locale/pt-br";

type Props = {
  date: DateType | undefined;
  setDate: (date: DateType | undefined) => void;
};

export function DatePicker({ date, setDate }: Props) {
  dayjs.extend(isLeapYear);

  const white = useToken("colors", "white");
  const violet500 = useToken("colors", "violet.500");
  const gray900 = useToken("colors", "gray.900");

  return (
    <DateTimePicker
      mode='single'
      locale='pt-br'
      headerTextStyle={{
        color: white,
      }}
      headerButtonColor={white}
      weekDaysTextStyle={{
        color: white,
      }}
      calendarTextStyle={{
        color: white,
      }}
      selectedTextStyle={{
        color: white,
      }}
      monthContainerStyle={{
        backgroundColor: gray900,
      }}
      yearContainerStyle={{
        backgroundColor: gray900,
      }}
      selectedItemColor={violet500}
      date={date}
      onChange={(params) => setDate(params.date)}
    />
  );
}
