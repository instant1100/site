import React from 'react';
import { useTranslation } from 'react-i18next';

import EntityList from '$TimeTracer/entity/_common/components/EntityList';
import { ENTITIES_LIST } from '$TimeTracer/entity/entityMap';

const WordsList = () => {
  const { t } = useTranslation();

  return <EntityList entityName={ENTITIES_LIST.WORD} title={t('time_tracing/words')} />;
};

export default WordsList;
