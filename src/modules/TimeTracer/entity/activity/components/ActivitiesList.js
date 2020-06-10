import React from 'react';
import EntityList from '@/modules/TimeTracer/entity/_common/components/EntityList';
import { ACTIVITY_ENTITY } from '@/modules/TimeTracer/entity/entityMap';
import { useTranslation } from 'react-i18next';

const ActivitiesList = () => {
  const { t } = useTranslation();

  return <EntityList entityName={ACTIVITY_ENTITY} title={t('time_tracing/activities')} />;
};

export default ActivitiesList;
