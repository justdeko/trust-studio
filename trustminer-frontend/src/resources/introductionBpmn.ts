export const introductionBpmn = `<?xml version="1.0" encoding="UTF-8"?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:signavio="http://www.signavio.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="14.0.0" expressionLanguage="http://www.w3.org/TR/XPath" id="sid-0b6f6351-4222-4aa2-b6f1-ced79acfea5c" targetNamespace="http://www.signavio.com" typeLanguage="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
   <escalation id="sid-c4e18aa6-7e3d-47ca-aaaf-663d1bd718b2"/>
   <collaboration id="sid-04a9f8f9-47a9-43fa-b1ac-1bb8c73223f8">
      <extensionElements>
         <signavio:signavioDiagramMetaData metaKey="businessunit" metaValue=""/>
         <signavio:signavioDiagramMetaData metaKey="iso9000ff" metaValue=""/>
         <signavio:signavioDiagramMetaData metaKey="processowner" metaValue=""/>
         <signavio:signavioDiagramMetaData metaKey="processgoal" metaValue=""/>
         <signavio:signavioDiagramMetaData metaKey="soxrelevant" metaValue=""/>
         <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="0b41aca391764cfbaa5640d71b6d0465"/>
      </extensionElements>
      <participant id="sid-9028AB76-0AB4-4EA1-8D45-AD27965EC75F" name="Sender" processRef="sid-43818109-F17D-411A-9F12-AC4DB61C90A2">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </participant>
      <participant id="sid-03A31EF6-B792-4F9E-9D30-23598045E2DE" name="Carrier" processRef="sid-1E3129E1-2A20-4D3A-93E1-7E640D335618">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </participant>
      <participant id="sid-4B72A8B7-6265-4C05-AB20-5D8695EDD40C" name="Receiver" processRef="sid-E21AE530-B159-4DD4-9650-4635D6D2496F">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </participant>
      <messageFlow id="sid-98DF549B-BE8C-4961-8ADA-6A4496C82A84" sourceRef="sid-6E2722C4-BD0A-4E80-BA19-6E2D514CC554" targetRef="sid-08705128-8BD2-4262-9F41-709E44E94BA1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </messageFlow>
      <messageFlow id="sid-A539E1C8-E1D1-4278-B3B0-72C4EEC37D85" sourceRef="sid-CFD34EB0-7AF3-4030-BA00-A4B4A6F772F1" targetRef="sid-85222F0E-BF58-44A9-B409-A5DB50AB0CBA">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </messageFlow>
      <messageFlow id="sid-A790C852-994B-4CC3-B019-13DF585E533D" sourceRef="sid-6736A8E0-D0B0-4F8A-94F8-CCCA5A3ABF80" targetRef="sid-E9C1DE44-71D9-47EE-A817-482820518B93">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </messageFlow>
      <messageFlow id="sid-B99BCB16-7057-42BA-8486-A9B751FA2234" sourceRef="sid-CAAB31F9-BA8E-416F-81FE-6D4E41EFA446" targetRef="sid-FB5F85DD-D19C-42D6-B6C9-F5BDB8EE8593">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </messageFlow>
   </collaboration>
   <process id="sid-43818109-F17D-411A-9F12-AC4DB61C90A2" isClosed="false" isExecutable="false" name="Sender" processType="None">
      <extensionElements/>
      <ioSpecification id="sid-7d513ddf-62a2-445a-9929-353a7d417edc">
         <dataInput id="sid-423812FB-9184-443D-B1DD-4F20E3DB7C18" isCollection="false" name="invoice">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
         </dataInput>
         <dataOutput id="sid-27BF3370-F20A-4283-BE71-2BA27F75BE51" isCollection="false" name="SLAs">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
         </dataOutput>
         <inputSet id="sid-56976ca7-b7cb-4a23-807d-ccf15de411cd">
            <dataInputRefs>sid-423812FB-9184-443D-B1DD-4F20E3DB7C18</dataInputRefs>
         </inputSet>
         <outputSet id="sid-ed3790ca-1f27-4323-9379-ebc689e0163c">
            <dataOutputRefs>sid-27BF3370-F20A-4283-BE71-2BA27F75BE51</dataOutputRefs>
         </outputSet>
      </ioSpecification>
      <laneSet id="sid-2db10714-e97d-4920-be3f-c5f86175d732">
         <lane id="sid-198A35CD-60FF-4753-83EA-ADD0C8AC8BA8">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
            <flowNodeRef>sid-1B01F960-43E0-4D1B-9D83-B4CF358F22D8</flowNodeRef>
            <flowNodeRef>sid-6E2722C4-BD0A-4E80-BA19-6E2D514CC554</flowNodeRef>
            <flowNodeRef>sid-E9C1DE44-71D9-47EE-A817-482820518B93</flowNodeRef>
            <flowNodeRef>sid-CE946C01-BDBC-4CA7-BA51-D5C42992A5CC</flowNodeRef>
            <flowNodeRef>sid-9B538D0B-EDE0-40F6-A55F-41B3409E6659</flowNodeRef>
            <flowNodeRef>sid-5AAEE300-64A5-4167-9EA2-CBBFF5CEEA68</flowNodeRef>
         </lane>
      </laneSet>
      <startEvent id="sid-1B01F960-43E0-4D1B-9D83-B4CF358F22D8">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
         <outgoing>sid-0D58D937-E0FE-4A79-89E8-B83F29B7FC54</outgoing>
      </startEvent>
      <intermediateThrowEvent id="sid-6E2722C4-BD0A-4E80-BA19-6E2D514CC554" name="handover parcel">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioLabel bottom="false" left="false" ref="text_name" right="false" top="true" valign="bottom" x="15.0" y="-8.0"/>
         </extensionElements>
         <incoming>sid-F4A0EBF2-B140-4735-A57B-22E327821406</incoming>
         <outgoing>sid-7E476408-1972-48F3-8DCC-63F8B5D6B10C</outgoing>
         <messageEventDefinition id="sid-323f788a-f860-403e-8dce-706c4a3e1383"/>
      </intermediateThrowEvent>
      <intermediateCatchEvent id="sid-E9C1DE44-71D9-47EE-A817-482820518B93">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="viaitsystem" metaValue=""/>
         </extensionElements>
         <incoming>sid-7E476408-1972-48F3-8DCC-63F8B5D6B10C</incoming>
         <outgoing>sid-17807F92-AD25-44ED-AA81-AD38548CB7D2</outgoing>
         <messageEventDefinition id="sid-253d6203-e21f-45c6-bd80-5f0a29753f54"/>
      </intermediateCatchEvent>
      <userTask completionQuantity="1" id="sid-CE946C01-BDBC-4CA7-BA51-D5C42992A5CC" implementation="##WebService" isForCompensation="false" name="pay invoice" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="risklevel" metaValue=""/>
            <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>
         </extensionElements>
         <incoming>sid-17807F92-AD25-44ED-AA81-AD38548CB7D2</incoming>
         <outgoing>sid-D030BD63-52F5-41EF-976F-F01497B96A3E</outgoing>
      </userTask>
      <endEvent id="sid-9B538D0B-EDE0-40F6-A55F-41B3409E6659">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
         <incoming>sid-D030BD63-52F5-41EF-976F-F01497B96A3E</incoming>
      </endEvent>
      <userTask completionQuantity="1" id="sid-5AAEE300-64A5-4167-9EA2-CBBFF5CEEA68" implementation="##WebService" isForCompensation="false" name="prepare parcel" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="risklevel" metaValue=""/>
            <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>
         </extensionElements>
         <incoming>sid-0D58D937-E0FE-4A79-89E8-B83F29B7FC54</incoming>
         <outgoing>sid-F4A0EBF2-B140-4735-A57B-22E327821406</outgoing>
      </userTask>
      <sequenceFlow id="sid-0D58D937-E0FE-4A79-89E8-B83F29B7FC54" sourceRef="sid-1B01F960-43E0-4D1B-9D83-B4CF358F22D8" targetRef="sid-5AAEE300-64A5-4167-9EA2-CBBFF5CEEA68">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-D030BD63-52F5-41EF-976F-F01497B96A3E" sourceRef="sid-CE946C01-BDBC-4CA7-BA51-D5C42992A5CC" targetRef="sid-9B538D0B-EDE0-40F6-A55F-41B3409E6659">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-17807F92-AD25-44ED-AA81-AD38548CB7D2" sourceRef="sid-E9C1DE44-71D9-47EE-A817-482820518B93" targetRef="sid-CE946C01-BDBC-4CA7-BA51-D5C42992A5CC">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-7E476408-1972-48F3-8DCC-63F8B5D6B10C" sourceRef="sid-6E2722C4-BD0A-4E80-BA19-6E2D514CC554" targetRef="sid-E9C1DE44-71D9-47EE-A817-482820518B93">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-F4A0EBF2-B140-4735-A57B-22E327821406" sourceRef="sid-5AAEE300-64A5-4167-9EA2-CBBFF5CEEA68" targetRef="sid-6E2722C4-BD0A-4E80-BA19-6E2D514CC554">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <association associationDirection="None" id="sid-0B1D4693-FE71-4F8C-B4AA-C3F46237E4A8" sourceRef="sid-423812FB-9184-443D-B1DD-4F20E3DB7C18" targetRef="sid-17807F92-AD25-44ED-AA81-AD38548CB7D2">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </association>
      <association associationDirection="None" id="sid-ECC53970-1016-4B14-B1DF-988700C2D69D" sourceRef="sid-27BF3370-F20A-4283-BE71-2BA27F75BE51" targetRef="sid-F4A0EBF2-B140-4735-A57B-22E327821406">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </association>
   </process>
   <process id="sid-1E3129E1-2A20-4D3A-93E1-7E640D335618" isClosed="false" isExecutable="false" name="Carrier" processType="None">
      <extensionElements/>
      <ioSpecification id="sid-34c07920-0799-4ce6-ad5d-cad24dab3d78">
         <dataInput id="sid-7ED9BAD9-4211-4942-B415-45E0446BD467" isCollection="false" name="SLAs">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
         </dataInput>
         <dataInput id="sid-BAA815A9-F49F-480B-BA3E-CFCE4E357CB2" isCollection="false" name="SLAs">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
         </dataInput>
         <dataOutput id="sid-55D441AE-C2C9-4316-8931-CEEE1D5E4A03" isCollection="false" name="invoice">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
         </dataOutput>
         <dataOutput id="sid-1F661508-883F-467F-9964-D969CC3F8161" isCollection="false" name="report">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
         </dataOutput>
         <inputSet id="sid-6d614b39-94b4-4217-86a0-6aa28881500a">
            <dataInputRefs>sid-7ED9BAD9-4211-4942-B415-45E0446BD467</dataInputRefs>
            <dataInputRefs>sid-BAA815A9-F49F-480B-BA3E-CFCE4E357CB2</dataInputRefs>
         </inputSet>
         <outputSet id="sid-48d483f8-1e26-4119-b1f3-d8dab98d1549">
            <dataOutputRefs>sid-55D441AE-C2C9-4316-8931-CEEE1D5E4A03</dataOutputRefs>
            <dataOutputRefs>sid-1F661508-883F-467F-9964-D969CC3F8161</dataOutputRefs>
         </outputSet>
      </ioSpecification>
      <laneSet id="sid-05d5382f-0291-4d0d-8437-b83d39b7bb16">
         <lane id="sid-91B88C4F-6EFC-4D36-9688-7F5270A0F7BB">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
            <flowNodeRef>sid-08705128-8BD2-4262-9F41-709E44E94BA1</flowNodeRef>
            <flowNodeRef>sid-85C3F308-8992-4DEF-8C6A-8622FE62060A</flowNodeRef>
            <flowNodeRef>sid-CFD34EB0-7AF3-4030-BA00-A4B4A6F772F1</flowNodeRef>
            <flowNodeRef>sid-6736A8E0-D0B0-4F8A-94F8-CCCA5A3ABF80</flowNodeRef>
            <flowNodeRef>sid-CCA902CE-D734-4766-9EF3-66D70AE07FA0</flowNodeRef>
            <flowNodeRef>sid-F5CB219E-F87E-4BE4-AB06-C23370EA47DF</flowNodeRef>
            <flowNodeRef>sid-0D306884-7F25-4F26-8540-295392DBC33C</flowNodeRef>
            <flowNodeRef>sid-CEB42A44-41F3-4402-8BF6-93902031CE0F</flowNodeRef>
            <flowNodeRef>sid-FB5F85DD-D19C-42D6-B6C9-F5BDB8EE8593</flowNodeRef>
            <flowNodeRef>sid-EB497C6A-0ABF-4110-AB96-B568F5277901</flowNodeRef>
         </lane>
      </laneSet>
      <startEvent id="sid-08705128-8BD2-4262-9F41-709E44E94BA1" isInterrupting="true">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="viaitsystem" metaValue=""/>
         </extensionElements>
         <outgoing>sid-7C3450FC-4056-4636-85AC-AFABFA1BA17B</outgoing>
         <messageEventDefinition id="sid-58bd3d12-3aa2-4094-abde-c0166d3e77d9"/>
      </startEvent>
      <manualTask completionQuantity="1" id="sid-85C3F308-8992-4DEF-8C6A-8622FE62060A" isForCompensation="false" name="deliver parcel" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="risklevel" metaValue=""/>
            <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>
         </extensionElements>
         <incoming>sid-7C3450FC-4056-4636-85AC-AFABFA1BA17B</incoming>
         <outgoing>sid-8779C01A-4EF4-44C3-A7BA-C38D6CB4B624</outgoing>
      </manualTask>
      <intermediateThrowEvent id="sid-CFD34EB0-7AF3-4030-BA00-A4B4A6F772F1" name="handover parcel">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioLabel bottom="false" left="false" ref="text_name" right="false" top="true" valign="bottom" x="15.0" y="-8.0"/>
         </extensionElements>
         <incoming>sid-8779C01A-4EF4-44C3-A7BA-C38D6CB4B624</incoming>
         <outgoing>sid-AD647956-0393-4BFD-AF56-70D24242ADC4</outgoing>
         <messageEventDefinition id="sid-d3ccdcc3-54df-4612-9088-9a6ec0f44e82"/>
      </intermediateThrowEvent>
      <intermediateThrowEvent id="sid-6736A8E0-D0B0-4F8A-94F8-CCCA5A3ABF80" name="send invoice">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
         <incoming>sid-73166009-1959-414F-A300-ABF797C8C467</incoming>
         <outgoing>sid-03AA944C-DCD4-4D8A-8499-1FE7C5FF0E42</outgoing>
         <messageEventDefinition id="sid-a80362b3-6b30-4beb-890c-a5733809c211"/>
      </intermediateThrowEvent>
      <endEvent id="sid-CCA902CE-D734-4766-9EF3-66D70AE07FA0">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
         <incoming>sid-03AA944C-DCD4-4D8A-8499-1FE7C5FF0E42</incoming>
      </endEvent>
      <serviceTask completionQuantity="1" id="sid-F5CB219E-F87E-4BE4-AB06-C23370EA47DF" implementation="##WebService" isForCompensation="false" name="create invoice" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="risklevel" metaValue=""/>
            <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>
         </extensionElements>
         <incoming>sid-39D9EE56-48BF-4601-80FC-24557EF3D8DD</incoming>
         <outgoing>sid-73166009-1959-414F-A300-ABF797C8C467</outgoing>
         <dataInputAssociation id="sid-6A88A2DF-3C35-4625-93A9-83457AAC00D5">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
            <sourceRef>sid-55D441AE-C2C9-4316-8931-CEEE1D5E4A03</sourceRef>
            <targetRef>sid-F5CB219E-F87E-4BE4-AB06-C23370EA47DF</targetRef>
         </dataInputAssociation>
      </serviceTask>
      <userTask completionQuantity="1" id="sid-0D306884-7F25-4F26-8540-295392DBC33C" implementation="##WebService" isForCompensation="false" name="create report" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="risklevel" metaValue=""/>
            <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>
         </extensionElements>
         <incoming>sid-9E30C50C-1EFA-480C-89EC-B2B7BC43702D</incoming>
         <outgoing>sid-246728EF-EB9C-4D04-8089-FCE2C8CB391D</outgoing>
         <ioSpecification id="sid-a30606cd-64f8-4c5c-90af-e38753bed826">
            <dataOutput id="sid-f373ef63-1791-4d20-92db-719655eb5812"/>
            <inputSet id="sid-926bc08b-1cc7-4676-9fcc-9d26878a7003" name="DefaultInputSet">
               <outputSetRefs>sid-de63b4f6-5a84-45af-93c9-52d82ecff0e9</outputSetRefs>
            </inputSet>
            <outputSet id="sid-de63b4f6-5a84-45af-93c9-52d82ecff0e9" name="DefaultOutputSet">
               <dataOutputRefs>sid-f373ef63-1791-4d20-92db-719655eb5812</dataOutputRefs>
               <inputSetRefs>sid-926bc08b-1cc7-4676-9fcc-9d26878a7003</inputSetRefs>
            </outputSet>
         </ioSpecification>
         <dataOutputAssociation id="sid-3F9CECA2-D8C9-40D0-BE91-DC13E231F4A4">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
            <sourceRef>sid-f373ef63-1791-4d20-92db-719655eb5812</sourceRef>
            <targetRef>sid-1F661508-883F-467F-9964-D969CC3F8161</targetRef>
         </dataOutputAssociation>
      </userTask>
      <endEvent id="sid-CEB42A44-41F3-4402-8BF6-93902031CE0F">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
         <incoming>sid-246728EF-EB9C-4D04-8089-FCE2C8CB391D</incoming>
         <terminateEventDefinition id="sid-fa0c2007-3a50-44ed-82e1-fe22d070e14c"/>
      </endEvent>
      <intermediateCatchEvent id="sid-FB5F85DD-D19C-42D6-B6C9-F5BDB8EE8593">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="viaitsystem" metaValue=""/>
         </extensionElements>
         <incoming>sid-AD647956-0393-4BFD-AF56-70D24242ADC4</incoming>
         <outgoing>sid-39D9EE56-48BF-4601-80FC-24557EF3D8DD</outgoing>
         <messageEventDefinition id="sid-58dbd077-39c2-4333-a309-018258f025d8"/>
      </intermediateCatchEvent>
      <intermediateCatchEvent id="sid-EB497C6A-0ABF-4110-AB96-B568F5277901" name="incident">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioLabel ref="text_name" valign="middle" x="58.0" y="26.0"/>
         </extensionElements>
         <outgoing>sid-9E30C50C-1EFA-480C-89EC-B2B7BC43702D</outgoing>
         <escalationEventDefinition escalationRef="sid-c4e18aa6-7e3d-47ca-aaaf-663d1bd718b2" id="sid-a88c4e2b-4a93-4c5b-89cb-b004322646c8"/>
      </intermediateCatchEvent>
      <sequenceFlow id="sid-03AA944C-DCD4-4D8A-8499-1FE7C5FF0E42" sourceRef="sid-6736A8E0-D0B0-4F8A-94F8-CCCA5A3ABF80" targetRef="sid-CCA902CE-D734-4766-9EF3-66D70AE07FA0">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-73166009-1959-414F-A300-ABF797C8C467" sourceRef="sid-F5CB219E-F87E-4BE4-AB06-C23370EA47DF" targetRef="sid-6736A8E0-D0B0-4F8A-94F8-CCCA5A3ABF80">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-9E30C50C-1EFA-480C-89EC-B2B7BC43702D" sourceRef="sid-EB497C6A-0ABF-4110-AB96-B568F5277901" targetRef="sid-0D306884-7F25-4F26-8540-295392DBC33C">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-246728EF-EB9C-4D04-8089-FCE2C8CB391D" sourceRef="sid-0D306884-7F25-4F26-8540-295392DBC33C" targetRef="sid-CEB42A44-41F3-4402-8BF6-93902031CE0F">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-7C3450FC-4056-4636-85AC-AFABFA1BA17B" sourceRef="sid-08705128-8BD2-4262-9F41-709E44E94BA1" targetRef="sid-85C3F308-8992-4DEF-8C6A-8622FE62060A">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-8779C01A-4EF4-44C3-A7BA-C38D6CB4B624" sourceRef="sid-85C3F308-8992-4DEF-8C6A-8622FE62060A" targetRef="sid-CFD34EB0-7AF3-4030-BA00-A4B4A6F772F1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-AD647956-0393-4BFD-AF56-70D24242ADC4" sourceRef="sid-CFD34EB0-7AF3-4030-BA00-A4B4A6F772F1" targetRef="sid-FB5F85DD-D19C-42D6-B6C9-F5BDB8EE8593">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-39D9EE56-48BF-4601-80FC-24557EF3D8DD" sourceRef="sid-FB5F85DD-D19C-42D6-B6C9-F5BDB8EE8593" targetRef="sid-F5CB219E-F87E-4BE4-AB06-C23370EA47DF">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <association associationDirection="None" id="sid-04069AF2-611E-4DC3-955D-D2C028DC0176" sourceRef="sid-7ED9BAD9-4211-4942-B415-45E0446BD467" targetRef="sid-7C3450FC-4056-4636-85AC-AFABFA1BA17B">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </association>
      <association associationDirection="None" id="sid-0B4C2E74-904A-4DC0-86AD-AC934680691C" sourceRef="sid-BAA815A9-F49F-480B-BA3E-CFCE4E357CB2" targetRef="sid-39D9EE56-48BF-4601-80FC-24557EF3D8DD">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </association>
   </process>
   <process id="sid-E21AE530-B159-4DD4-9650-4635D6D2496F" isClosed="false" isExecutable="false" name="Receiver" processType="None">
      <extensionElements/>
      <ioSpecification id="sid-93547466-31cd-4c88-bbf2-2bf337fb8757">
         <dataInput id="sid-2594D7BE-AF56-414E-95B8-12F3D5D3BBBF" isCollection="false" name="SLAs">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
         </dataInput>
         <inputSet id="sid-6f7f4167-d6b3-4eaf-b42e-8597ef965739">
            <dataInputRefs>sid-2594D7BE-AF56-414E-95B8-12F3D5D3BBBF</dataInputRefs>
         </inputSet>
         <outputSet id="sid-5f33b50f-cdd6-4b50-ba6a-068d5aa56596"/>
      </ioSpecification>
      <laneSet id="sid-9b7ea905-1a6c-4d02-9cc8-a9de9a9d1166">
         <lane id="sid-A5007B80-7C6D-486C-9EA6-838AD73052CC">
            <extensionElements>
               <signavio:signavioMetaData metaKey="bgcolor" metaValue=""/>
               <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            </extensionElements>
            <flowNodeRef>sid-1BF1E80F-C04A-4E89-91FB-AEB857FED03D</flowNodeRef>
            <flowNodeRef>sid-85222F0E-BF58-44A9-B409-A5DB50AB0CBA</flowNodeRef>
            <flowNodeRef>sid-BC5BD1E7-4E2F-4313-BAF7-1257EFA4000E</flowNodeRef>
            <flowNodeRef>sid-02131101-8AC1-4FFE-B449-B25287A49274</flowNodeRef>
            <flowNodeRef>sid-D47E7497-71E0-4E6F-9916-AC22016C1DD2</flowNodeRef>
            <flowNodeRef>sid-CAAB31F9-BA8E-416F-81FE-6D4E41EFA446</flowNodeRef>
            <flowNodeRef>sid-F2E6FE1A-B134-4C1F-A998-CB7A730C04BC</flowNodeRef>
            <flowNodeRef>sid-056C939C-750C-4BD8-BF85-7F020977BA07</flowNodeRef>
         </lane>
      </laneSet>
      <manualTask completionQuantity="1" id="sid-1BF1E80F-C04A-4E89-91FB-AEB857FED03D" isForCompensation="false" name="receive parcel" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="risklevel" metaValue=""/>
            <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>
         </extensionElements>
         <incoming>sid-41F50BDE-593E-4B22-97D7-ECEC359218BA</incoming>
         <outgoing>sid-9FABF3EA-687C-47CC-860E-A967674CF773</outgoing>
      </manualTask>
      <startEvent id="sid-85222F0E-BF58-44A9-B409-A5DB50AB0CBA" isInterrupting="true">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="viaitsystem" metaValue=""/>
         </extensionElements>
         <outgoing>sid-41F50BDE-593E-4B22-97D7-ECEC359218BA</outgoing>
         <messageEventDefinition id="sid-86a06a8c-e160-489b-a663-b9eb8266ac06"/>
      </startEvent>
      <exclusiveGateway gatewayDirection="Diverging" id="sid-BC5BD1E7-4E2F-4313-BAF7-1257EFA4000E" name="parcel in &#10;acceptable &#10;condition?">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioLabel align="center" ref="text_name" valign="middle" x="79.0" y="49.0"/>
         </extensionElements>
         <incoming>sid-9FABF3EA-687C-47CC-860E-A967674CF773</incoming>
         <outgoing>sid-AE0261B0-7304-438F-A984-094DF452DE76</outgoing>
         <outgoing>sid-92FE67D1-22AA-41D3-A6BB-BF2CF8531EF0</outgoing>
      </exclusiveGateway>
      <userTask completionQuantity="1" id="sid-02131101-8AC1-4FFE-B449-B25287A49274" implementation="##WebService" isForCompensation="false" name="accept parcel" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="risklevel" metaValue=""/>
            <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>
         </extensionElements>
         <incoming>sid-92FE67D1-22AA-41D3-A6BB-BF2CF8531EF0</incoming>
         <outgoing>sid-328A10F9-C9D1-43CB-8923-E8CDC0A45A0C</outgoing>
      </userTask>
      <userTask completionQuantity="1" id="sid-D47E7497-71E0-4E6F-9916-AC22016C1DD2" implementation="##WebService" isForCompensation="false" name="reject parcel" startQuantity="1">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
            <signavio:signavioMetaData metaKey="risklevel" metaValue=""/>
            <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>
         </extensionElements>
         <incoming>sid-AE0261B0-7304-438F-A984-094DF452DE76</incoming>
         <outgoing>sid-8AE91523-07EA-4829-A251-651688AED026</outgoing>
      </userTask>
      <intermediateThrowEvent id="sid-CAAB31F9-BA8E-416F-81FE-6D4E41EFA446" name="notify acceptance">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
         <incoming>sid-328A10F9-C9D1-43CB-8923-E8CDC0A45A0C</incoming>
         <outgoing>sid-8759DB2E-C0D3-4517-933F-A812B702FB3A</outgoing>
         <messageEventDefinition id="sid-6bdfd454-3048-4c4e-9e15-d50376ee9ceb"/>
      </intermediateThrowEvent>
      <endEvent id="sid-F2E6FE1A-B134-4C1F-A998-CB7A730C04BC">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
         <incoming>sid-8759DB2E-C0D3-4517-933F-A812B702FB3A</incoming>
      </endEvent>
      <endEvent id="sid-056C939C-750C-4BD8-BF85-7F020977BA07">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
         <incoming>sid-8AE91523-07EA-4829-A251-651688AED026</incoming>
         <terminateEventDefinition id="sid-27688ba4-6c9e-4e2f-a093-23de0692ccc8"/>
      </endEvent>
      <sequenceFlow id="sid-41F50BDE-593E-4B22-97D7-ECEC359218BA" sourceRef="sid-85222F0E-BF58-44A9-B409-A5DB50AB0CBA" targetRef="sid-1BF1E80F-C04A-4E89-91FB-AEB857FED03D">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-9FABF3EA-687C-47CC-860E-A967674CF773" sourceRef="sid-1BF1E80F-C04A-4E89-91FB-AEB857FED03D" targetRef="sid-BC5BD1E7-4E2F-4313-BAF7-1257EFA4000E">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-AE0261B0-7304-438F-A984-094DF452DE76" name="no" sourceRef="sid-BC5BD1E7-4E2F-4313-BAF7-1257EFA4000E" targetRef="sid-D47E7497-71E0-4E6F-9916-AC22016C1DD2">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-328A10F9-C9D1-43CB-8923-E8CDC0A45A0C" sourceRef="sid-02131101-8AC1-4FFE-B449-B25287A49274" targetRef="sid-CAAB31F9-BA8E-416F-81FE-6D4E41EFA446">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-92FE67D1-22AA-41D3-A6BB-BF2CF8531EF0" name="yes" sourceRef="sid-BC5BD1E7-4E2F-4313-BAF7-1257EFA4000E" targetRef="sid-02131101-8AC1-4FFE-B449-B25287A49274">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-8AE91523-07EA-4829-A251-651688AED026" sourceRef="sid-D47E7497-71E0-4E6F-9916-AC22016C1DD2" targetRef="sid-056C939C-750C-4BD8-BF85-7F020977BA07">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-8759DB2E-C0D3-4517-933F-A812B702FB3A" sourceRef="sid-CAAB31F9-BA8E-416F-81FE-6D4E41EFA446" targetRef="sid-F2E6FE1A-B134-4C1F-A998-CB7A730C04BC">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </sequenceFlow>
      <association associationDirection="None" id="sid-7C071E51-713E-4A37-BCC1-F3E49265F957" sourceRef="sid-2594D7BE-AF56-414E-95B8-12F3D5D3BBBF" targetRef="sid-9FABF3EA-687C-47CC-860E-A967674CF773">
         <extensionElements>
            <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>
         </extensionElements>
      </association>
   </process>
   <bpmndi:BPMNDiagram id="sid-bd685300-9a0e-45aa-89a9-efe32b722ab9">
      <bpmndi:BPMNPlane bpmnElement="sid-04a9f8f9-47a9-43fa-b1ac-1bb8c73223f8" id="sid-691eecf5-fe6c-48aa-98ce-a37d0a14d466">
         <bpmndi:BPMNShape bpmnElement="sid-9028AB76-0AB4-4EA1-8D45-AD27965EC75F" id="sid-9028AB76-0AB4-4EA1-8D45-AD27965EC75F_gui" isHorizontal="true">
            <omgdc:Bounds height="149.0" width="833.0" x="563.0" y="80.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="38.57143020629883" width="12.0" x="568.0" y="135.2142848968506"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-03A31EF6-B792-4F9E-9D30-23598045E2DE" id="sid-03A31EF6-B792-4F9E-9D30-23598045E2DE_gui" isHorizontal="true">
            <omgdc:Bounds height="260.128225833148" width="833.0" x="563.0" y="246.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="36.25714111328125" width="12.0" x="567.9998824447541" y="357.9355423599334"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-4B72A8B7-6265-4C05-AB20-5D8695EDD40C" id="sid-4B72A8B7-6265-4C05-AB20-5D8695EDD40C_gui" isHorizontal="true">
            <omgdc:Bounds height="214.0" width="833.0" x="563.0" y="520.3376014051028"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="44.74285888671875" width="12.0" x="568.0" y="604.9661719617434"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-198A35CD-60FF-4753-83EA-ADD0C8AC8BA8" id="sid-198A35CD-60FF-4753-83EA-ADD0C8AC8BA8_gui" isHorizontal="true">
            <omgdc:Bounds height="149.0" width="803.0" x="593.0" y="80.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1B01F960-43E0-4D1B-9D83-B4CF358F22D8" id="sid-1B01F960-43E0-4D1B-9D83-B4CF358F22D8_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="622.0" y="114.24867403083738"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-6E2722C4-BD0A-4E80-BA19-6E2D514CC554" id="sid-6E2722C4-BD0A-4E80-BA19-6E2D514CC554_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="904.0" y="114.24867403083738"/>
            <bpmndi:BPMNLabel labelStyle="sid-cc4dfa1e-6e2c-4c4e-ae5b-82f1057d0d41">
               <omgdc:Bounds height="11.0" width="79.19999694824219" x="879.4000015258789" y="95.24867403083738"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-E9C1DE44-71D9-47EE-A817-482820518B93" id="sid-E9C1DE44-71D9-47EE-A817-482820518B93_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="1012.0" y="114.24867403083738"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-CE946C01-BDBC-4CA7-BA51-D5C42992A5CC" id="sid-CE946C01-BDBC-4CA7-BA51-D5C42992A5CC_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1092.0" y="89.24867403083738"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="59.400001525878906" x="1112.2999992370605" y="121.24867403083738"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-9B538D0B-EDE0-40F6-A55F-41B3409E6659" id="sid-9B538D0B-EDE0-40F6-A55F-41B3409E6659_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1323.0" y="115.24867403083738"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-5AAEE300-64A5-4167-9EA2-CBBFF5CEEA68" id="sid-5AAEE300-64A5-4167-9EA2-CBBFF5CEEA68_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="697.0" y="89.24867403083738"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="77.14286041259766" x="708.4285697937012" y="121.24867403083738"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-423812FB-9184-443D-B1DD-4F20E3DB7C18" id="sid-423812FB-9184-443D-B1DD-4F20E3DB7C18_gui">
            <omgdc:Bounds height="59.0" width="40.0" x="1041.0" y="158.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="36.25714111328125" x="1042.8714294433594" y="179.5"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-27BF3370-F20A-4283-BE71-2BA27F75BE51" id="sid-27BF3370-F20A-4283-BE71-2BA27F75BE51_gui">
            <omgdc:Bounds height="59.0" width="40.0" x="836.0" y="158.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="27.77143096923828" x="842.1142845153809" y="179.5"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-91B88C4F-6EFC-4D36-9688-7F5270A0F7BB" id="sid-91B88C4F-6EFC-4D36-9688-7F5270A0F7BB_gui" isHorizontal="true">
            <omgdc:Bounds height="260.128225833148" width="803.0" x="593.0" y="246.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-08705128-8BD2-4262-9F41-709E44E94BA1" id="sid-08705128-8BD2-4262-9F41-709E44E94BA1_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="622.0" y="299.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-85C3F308-8992-4DEF-8C6A-8622FE62060A" id="sid-85C3F308-8992-4DEF-8C6A-8622FE62060A_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="697.0" y="274.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="70.19999694824219" x="711.9000015258789" y="306.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-CFD34EB0-7AF3-4030-BA00-A4B4A6F772F1" id="sid-CFD34EB0-7AF3-4030-BA00-A4B4A6F772F1_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="904.0" y="299.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-cc4dfa1e-6e2c-4c4e-ae5b-82f1057d0d41">
               <omgdc:Bounds height="11.0" width="79.19999694824219" x="879.4000015258789" y="280.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-6736A8E0-D0B0-4F8A-94F8-CCCA5A3ABF80" id="sid-6736A8E0-D0B0-4F8A-94F8-CCCA5A3ABF80_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="1237.0" y="299.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-cc4dfa1e-6e2c-4c4e-ae5b-82f1057d0d41">
               <omgdc:Bounds height="11.0" width="60.81428527832031" x="1221.5928573608398" y="331.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-CCA902CE-D734-4766-9EF3-66D70AE07FA0" id="sid-CCA902CE-D734-4766-9EF3-66D70AE07FA0_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1323.0" y="300.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-F5CB219E-F87E-4BE4-AB06-C23370EA47DF" id="sid-F5CB219E-F87E-4BE4-AB06-C23370EA47DF_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="1092.0" y="274.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="73.28571319580078" x="1105.3571434020996" y="306.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-0D306884-7F25-4F26-8540-295392DBC33C" id="sid-0D306884-7F25-4F26-8540-295392DBC33C_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="699.0" y="394.33760140510276"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="70.97142791748047" x="713.5142860412598" y="426.33760140510276"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-CEB42A44-41F3-4402-8BF6-93902031CE0F" id="sid-CEB42A44-41F3-4402-8BF6-93902031CE0F_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="842.0" y="420.33760140510276"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-FB5F85DD-D19C-42D6-B6C9-F5BDB8EE8593" id="sid-FB5F85DD-D19C-42D6-B6C9-F5BDB8EE8593_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="1017.0" y="299.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-EB497C6A-0ABF-4110-AB96-B568F5277901" id="sid-EB497C6A-0ABF-4110-AB96-B568F5277901_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="734.0" y="339.29551285815273"/>
            <bpmndi:BPMNLabel labelStyle="sid-cc4dfa1e-6e2c-4c4e-ae5b-82f1057d0d41">
               <omgdc:Bounds height="11.0" width="38.18571472167969" x="772.9071426391602" y="358.29551285815273"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-7ED9BAD9-4211-4942-B415-45E0446BD467" id="sid-7ED9BAD9-4211-4942-B415-45E0446BD467_gui">
            <omgdc:Bounds height="59.0" width="40.0" x="617.0" y="354.33760140510276"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="27.77143096923828" x="623.1142845153809" y="375.83760140510276"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-BAA815A9-F49F-480B-BA3E-CFCE4E357CB2" id="sid-BAA815A9-F49F-480B-BA3E-CFCE4E357CB2_gui">
            <omgdc:Bounds height="59.0" width="40.0" x="1041.0" y="354.33760140510276"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="27.77143096923828" x="1047.1142845153809" y="375.83760140510276"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-55D441AE-C2C9-4316-8931-CEEE1D5E4A03" id="sid-55D441AE-C2C9-4316-8931-CEEE1D5E4A03_gui">
            <omgdc:Bounds height="59.0" width="40.0" x="1202.0" y="374.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="36.25714111328125" x="1203.8714294433594" y="395.5"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1F661508-883F-467F-9964-D969CC3F8161" id="sid-1F661508-883F-467F-9964-D969CC3F8161_gui">
            <omgdc:Bounds height="59.0" width="40.0" x="836.0" y="346.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="33.94285583496094" x="839.0285720825195" y="367.5"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-A5007B80-7C6D-486C-9EA6-838AD73052CC" id="sid-A5007B80-7C6D-486C-9EA6-838AD73052CC_gui" isHorizontal="true">
            <omgdc:Bounds height="214.0" width="803.0" x="593.0" y="520.3376014051028"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-1BF1E80F-C04A-4E89-91FB-AEB857FED03D" id="sid-1BF1E80F-C04A-4E89-91FB-AEB857FED03D_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="697.0" y="548.3376014051028"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="72.5142822265625" x="710.7428588867188" y="580.3376014051028"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-85222F0E-BF58-44A9-B409-A5DB50AB0CBA" id="sid-85222F0E-BF58-44A9-B409-A5DB50AB0CBA_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="622.0" y="573.3376014051028"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-BC5BD1E7-4E2F-4313-BAF7-1257EFA4000E" id="sid-BC5BD1E7-4E2F-4313-BAF7-1257EFA4000E_gui" isMarkerVisible="true">
            <omgdc:Bounds height="40.0" width="40.0" x="836.0" y="568.3376014051028"/>
            <bpmndi:BPMNLabel labelStyle="sid-cc4dfa1e-6e2c-4c4e-ae5b-82f1057d0d41">
               <omgdc:Bounds height="36.0" width="56.31428527832031" x="886.8428573608398" y="597.3376014051028"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-02131101-8AC1-4FFE-B449-B25287A49274" id="sid-02131101-8AC1-4FFE-B449-B25287A49274_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="982.0" y="548.3376014051028"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="70.19999694824219" x="996.9000015258789" y="580.3376014051028"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-D47E7497-71E0-4E6F-9916-AC22016C1DD2" id="sid-D47E7497-71E0-4E6F-9916-AC22016C1DD2_gui">
            <omgdc:Bounds height="80.0" width="100.0" x="806.0" y="647.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="66.34285736083984" x="822.8285713195801" y="679.0"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-CAAB31F9-BA8E-416F-81FE-6D4E41EFA446" id="sid-CAAB31F9-BA8E-416F-81FE-6D4E41EFA446_gui">
            <omgdc:Bounds height="30.0" width="30.0" x="1127.0" y="573.3376014051028"/>
            <bpmndi:BPMNLabel labelStyle="sid-cc4dfa1e-6e2c-4c4e-ae5b-82f1057d0d41">
               <omgdc:Bounds height="11.0" width="86.27143096923828" x="1098.8642845153809" y="605.3376014051028"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-F2E6FE1A-B134-4C1F-A998-CB7A730C04BC" id="sid-F2E6FE1A-B134-4C1F-A998-CB7A730C04BC_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1323.0" y="574.3376014051028"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-056C939C-750C-4BD8-BF85-7F020977BA07" id="sid-056C939C-750C-4BD8-BF85-7F020977BA07_gui">
            <omgdc:Bounds height="28.0" width="28.0" x="1018.0" y="673.0"/>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNShape bpmnElement="sid-2594D7BE-AF56-414E-95B8-12F3D5D3BBBF" id="sid-2594D7BE-AF56-414E-95B8-12F3D5D3BBBF_gui">
            <omgdc:Bounds height="59.0" width="40.0" x="751.0" y="648.3376014051028"/>
            <bpmndi:BPMNLabel labelStyle="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
               <omgdc:Bounds height="12.0" width="27.77143096923828" x="757.1142845153809" y="669.8376014051028"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNShape>
         <bpmndi:BPMNEdge bpmnElement="sid-0D58D937-E0FE-4A79-89E8-B83F29B7FC54" id="sid-0D58D937-E0FE-4A79-89E8-B83F29B7FC54_gui">
            <omgdi:waypoint x="652.0" y="129.24867403083738"/>
            <omgdi:waypoint x="697.0" y="129.24867403083738"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-D030BD63-52F5-41EF-976F-F01497B96A3E" id="sid-D030BD63-52F5-41EF-976F-F01497B96A3E_gui">
            <omgdi:waypoint x="1192.0" y="129.24867403083738"/>
            <omgdi:waypoint x="1323.0" y="129.24867403083738"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-03AA944C-DCD4-4D8A-8499-1FE7C5FF0E42" id="sid-03AA944C-DCD4-4D8A-8499-1FE7C5FF0E42_gui">
            <omgdi:waypoint x="1267.0" y="314.0"/>
            <omgdi:waypoint x="1323.0" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-41F50BDE-593E-4B22-97D7-ECEC359218BA" id="sid-41F50BDE-593E-4B22-97D7-ECEC359218BA_gui">
            <omgdi:waypoint x="652.0" y="588.3376014051028"/>
            <omgdi:waypoint x="697.0" y="588.3376014051028"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-73166009-1959-414F-A300-ABF797C8C467" id="sid-73166009-1959-414F-A300-ABF797C8C467_gui">
            <omgdi:waypoint x="1192.0" y="314.0"/>
            <omgdi:waypoint x="1237.0" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-6A88A2DF-3C35-4625-93A9-83457AAC00D5" id="sid-6A88A2DF-3C35-4625-93A9-83457AAC00D5_gui">
            <omgdi:waypoint x="1206.3587005126308" y="374.0"/>
            <omgdi:waypoint x="1192.0" y="346.91902341844"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-9E30C50C-1EFA-480C-89EC-B2B7BC43702D" id="sid-9E30C50C-1EFA-480C-89EC-B2B7BC43702D_gui">
            <omgdi:waypoint x="749.0" y="369.29551285815273"/>
            <omgdi:waypoint x="749.0" y="394.33760140510276"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-246728EF-EB9C-4D04-8089-FCE2C8CB391D" id="sid-246728EF-EB9C-4D04-8089-FCE2C8CB391D_gui">
            <omgdi:waypoint x="799.0" y="434.33760140510276"/>
            <omgdi:waypoint x="842.0" y="434.33760140510276"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-17807F92-AD25-44ED-AA81-AD38548CB7D2" id="sid-17807F92-AD25-44ED-AA81-AD38548CB7D2_gui">
            <omgdi:waypoint x="1042.0" y="129.24867403083738"/>
            <omgdi:waypoint x="1092.0" y="129.24867403083738"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-7C3450FC-4056-4636-85AC-AFABFA1BA17B" id="sid-7C3450FC-4056-4636-85AC-AFABFA1BA17B_gui">
            <omgdi:waypoint x="652.0" y="314.0"/>
            <omgdi:waypoint x="697.0" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-8779C01A-4EF4-44C3-A7BA-C38D6CB4B624" id="sid-8779C01A-4EF4-44C3-A7BA-C38D6CB4B624_gui">
            <omgdi:waypoint x="797.0" y="314.0"/>
            <omgdi:waypoint x="904.0" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-AD647956-0393-4BFD-AF56-70D24242ADC4" id="sid-AD647956-0393-4BFD-AF56-70D24242ADC4_gui">
            <omgdi:waypoint x="934.0" y="314.0"/>
            <omgdi:waypoint x="1017.0" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-9FABF3EA-687C-47CC-860E-A967674CF773" id="sid-9FABF3EA-687C-47CC-860E-A967674CF773_gui">
            <omgdi:waypoint x="797.0" y="588.5659119073858"/>
            <omgdi:waypoint x="836.0" y="588.7439940991667"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-AE0261B0-7304-438F-A984-094DF452DE76" id="sid-AE0261B0-7304-438F-A984-094DF452DE76_gui">
            <omgdi:waypoint x="856.4006747987054" y="608.3376014051028"/>
            <omgdi:waypoint x="856.2037440026556" y="647.0"/>
            <bpmndi:BPMNLabel labelStyle="sid-cc4dfa1e-6e2c-4c4e-ae5b-82f1057d0d41">
               <omgdc:Bounds height="13.946684537965666" width="12.070571915639903" x="836.2903781387986" y="616.1417573149298"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-328A10F9-C9D1-43CB-8923-E8CDC0A45A0C" id="sid-328A10F9-C9D1-43CB-8923-E8CDC0A45A0C_gui">
            <omgdi:waypoint x="1082.0" y="588.3376014051028"/>
            <omgdi:waypoint x="1127.0" y="588.3376014051028"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-39D9EE56-48BF-4601-80FC-24557EF3D8DD" id="sid-39D9EE56-48BF-4601-80FC-24557EF3D8DD_gui">
            <omgdi:waypoint x="1047.0" y="314.0"/>
            <omgdi:waypoint x="1092.0" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-7E476408-1972-48F3-8DCC-63F8B5D6B10C" id="sid-7E476408-1972-48F3-8DCC-63F8B5D6B10C_gui">
            <omgdi:waypoint x="934.0" y="129.24867403083738"/>
            <omgdi:waypoint x="1012.0" y="129.24867403083738"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-F4A0EBF2-B140-4735-A57B-22E327821406" id="sid-F4A0EBF2-B140-4735-A57B-22E327821406_gui">
            <omgdi:waypoint x="797.0" y="129.24867403083738"/>
            <omgdi:waypoint x="904.0" y="129.24867403083738"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-98DF549B-BE8C-4961-8ADA-6A4496C82A84" id="sid-98DF549B-BE8C-4961-8ADA-6A4496C82A84_gui">
            <omgdi:waypoint x="919.0" y="144.24867403083738"/>
            <omgdi:waypoint x="919.0" y="264.0"/>
            <omgdi:waypoint x="637.0" y="264.0"/>
            <omgdi:waypoint x="637.0" y="299.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-92FE67D1-22AA-41D3-A6BB-BF2CF8531EF0" id="sid-92FE67D1-22AA-41D3-A6BB-BF2CF8531EF0_gui">
            <omgdi:waypoint x="876.0" y="588.7820458495472"/>
            <omgdi:waypoint x="982.0" y="588.4800515475529"/>
            <bpmndi:BPMNLabel labelStyle="sid-cc4dfa1e-6e2c-4c4e-ae5b-82f1057d0d41">
               <omgdc:Bounds height="12.052699337022318" width="18.54839563617577" x="883.890007491089" y="568.7065239728"/>
            </bpmndi:BPMNLabel>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-8AE91523-07EA-4829-A251-651688AED026" id="sid-8AE91523-07EA-4829-A251-651688AED026_gui">
            <omgdi:waypoint x="906.0" y="687.0"/>
            <omgdi:waypoint x="1018.0" y="687.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-8759DB2E-C0D3-4517-933F-A812B702FB3A" id="sid-8759DB2E-C0D3-4517-933F-A812B702FB3A_gui">
            <omgdi:waypoint x="1157.0" y="588.3376014051028"/>
            <omgdi:waypoint x="1323.0" y="588.3376014051028"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-04069AF2-611E-4DC3-955D-D2C028DC0176" id="sid-04069AF2-611E-4DC3-955D-D2C028DC0176_gui">
            <omgdi:waypoint x="653.47393348071" y="354.33760140510276"/>
            <omgdi:waypoint x="676.0" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-0B1D4693-FE71-4F8C-B4AA-C3F46237E4A8" id="sid-0B1D4693-FE71-4F8C-B4AA-C3F46237E4A8_gui">
            <omgdi:waypoint x="1060.2403606396285" y="158.0"/>
            <omgdi:waypoint x="1059.5" y="129.24867403083738"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-ECC53970-1016-4B14-B1DF-988700C2D69D" id="sid-ECC53970-1016-4B14-B1DF-988700C2D69D_gui">
            <omgdi:waypoint x="876.0" y="162.10432655295364"/>
            <omgdi:waypoint x="901.875" y="129.24867403083738"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-A539E1C8-E1D1-4278-B3B0-72C4EEC37D85" id="sid-A539E1C8-E1D1-4278-B3B0-72C4EEC37D85_gui">
            <omgdi:waypoint x="919.0" y="329.0"/>
            <omgdi:waypoint x="919.0" y="496.0"/>
            <omgdi:waypoint x="637.0" y="496.0"/>
            <omgdi:waypoint x="637.0" y="573.3376014051028"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-3F9CECA2-D8C9-40D0-BE91-DC13E231F4A4" id="sid-3F9CECA2-D8C9-40D0-BE91-DC13E231F4A4_gui">
            <omgdi:waypoint x="799.0" y="406.84339514103607"/>
            <omgdi:waypoint x="836.0" y="386.4976825056267"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-0B4C2E74-904A-4DC0-86AD-AC934680691C" id="sid-0B4C2E74-904A-4DC0-86AD-AC934680691C_gui">
            <omgdi:waypoint x="1073.0122431630177" y="354.33760140510276"/>
            <omgdi:waypoint x="1089.4375" y="314.0"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-7C071E51-713E-4A37-BCC1-F3E49265F957" id="sid-7C071E51-713E-4A37-BCC1-F3E49265F957_gui">
            <omgdi:waypoint x="791.0" y="649.601957201562"/>
            <omgdi:waypoint x="834.1077578894201" y="588.7431914926598"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-A790C852-994B-4CC3-B019-13DF585E533D" id="sid-A790C852-994B-4CC3-B019-13DF585E533D_gui">
            <omgdi:waypoint x="1252.0" y="299.0"/>
            <omgdi:waypoint x="1252.0" y="264.0"/>
            <omgdi:waypoint x="1027.0" y="264.0"/>
            <omgdi:waypoint x="1027.0" y="144.24867403083738"/>
         </bpmndi:BPMNEdge>
         <bpmndi:BPMNEdge bpmnElement="sid-B99BCB16-7057-42BA-8486-A9B751FA2234" id="sid-B99BCB16-7057-42BA-8486-A9B751FA2234_gui">
            <omgdi:waypoint x="1142.0" y="573.3376014051028"/>
            <omgdi:waypoint x="1142.0" y="499.0"/>
            <omgdi:waypoint x="1032.0" y="499.0"/>
            <omgdi:waypoint x="1032.0" y="329.0"/>
         </bpmndi:BPMNEdge>
      </bpmndi:BPMNPlane>
      <bpmndi:BPMNLabelStyle id="sid-cc4dfa1e-6e2c-4c4e-ae5b-82f1057d0d41">
         <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>
      </bpmndi:BPMNLabelStyle>
      <bpmndi:BPMNLabelStyle id="sid-5c1be77a-56d9-4df8-9ad3-ec1122187a41">
         <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>
      </bpmndi:BPMNLabelStyle>
   </bpmndi:BPMNDiagram>
</definitions>`;