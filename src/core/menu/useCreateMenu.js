import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useCreateMenu = (pageList) => {
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
