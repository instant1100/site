import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { MenuItemType } from '/core/menu/interfaces';

const useCreateMenu = (pageList: MenuItemType[]) => {
  const { url } = useRouteMatch();
  const { t } = useTranslation();

  return pageList
    .map((item) => ({
      ...item,
      title: t(item.title),
      key: item.key,
      url: url + item.path,
    }));
};

export default useCreateMenu;
