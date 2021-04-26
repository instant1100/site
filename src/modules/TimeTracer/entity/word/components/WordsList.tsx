import React from 'react';
import EntityList from '$TimeTracer/entity/_common/components/EntityList';
import { WORD_ENTITY } from '@/modules/TimeTracer/entity/entityMap';
import { useTranslation } from 'react-i18next';

const WordsList = () => {
  const { t } = useTranslation();

  return <EntityList entityName={WORD_ENTITY} title={t('time_tracing/words')} />;
};

export default WordsList;
