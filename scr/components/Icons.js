import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as IconRegular from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';

const { player1, player2 } = useSelector((store) => store.players)

//Game pieces Icons
export const GameIcon = (params) => {
  switch (params.type) {
    case 'O':
        return (
          <View>
            <FontAwesomeIcon icon={IconRegular.faCircle} size={70} color={player1.color} />
          </View>
        );
    case 'X':
        return (
          <View>
            <FontAwesomeIcon icon={IconRegular.faXmarkCircle} size={70} color={player2.color} />
          </View>
        );
    default:
      break;
  }
}