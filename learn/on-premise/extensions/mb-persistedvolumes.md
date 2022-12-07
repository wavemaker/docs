---
title: "Creating Persisted Volumes"
id: ""
sidebar_label: "Creating Persisted Volumes"
---
---

## Storage Disks Creation

- Create Storage Disks with following names from respective cloud computing with 50GB storage each and type as HDD
:::note
Make sure these storage disks are at same region as K8s cluster.
:::
	k8s-mbe-redis-data
	k8s-mbe-swagger-json-data
	k8s-mbe-tomcat-logs-data

## StorageClass and PV creation for GKE
	
### StorageClass Creation
- Create StorageClass

storageclass.yaml
	apiVersion: storage.k8s.io/v1
	kind: StorageClass
	metadata:
	  name: mockingbird-sc
	parameters:
	  type: pd-standard
	provisioner: kubernetes.io/gce-pd
	allowVolumeExpansion: true
	reclaimPolicy: Retain
	volumeBindingMode: WaitForFirstConsumer

```bash
kubectl apply -f storageclass.yaml  -n mockingbird
```

### PV's and PVC's creation
- PV and PVC's creation for MockingBird services

- Create PV's PVC's using 

servicestorage.yaml
		apiVersion: v1
		kind: PersistentVolume
		metadata:
		  name: pv-k8s-mbe-redis-data
		spec:
		  storageClassName: "mockingbird-sc"
		  capacity:
			storage: 50Gi
		  accessModes:
			- ReadWriteOnce
		  claimRef:
			namespace: mockingbird
			name: pv-claim-k8s-mbe-redis-data
		  gcePersistentDisk:
			pdName: k8s-mbe-redis-data
		---
		apiVersion: v1
		kind: PersistentVolumeClaim
		metadata:
		  name: pv-claim-k8s-mbe-redis-data
		  namespace: mockingbird
		spec:
		  storageClassName: "mockingbird-sc"
		  accessModes:
			- ReadWriteOnce
		  resources:
			requests:
			  storage: 50Gi
		---

		apiVersion: v1
		kind: PersistentVolume
		metadata:
		  name: pv-k8s-mbe-swagger-json-data
		spec:
		  storageClassName: "mockingbird-sc"
		  capacity:
			storage: 50Gi
		  accessModes:
			- ReadWriteOnce
		  claimRef:
			namespace: mockingbird
			name: pv-claim-k8s-mbe-swagger-json-data
		  gcePersistentDisk:
			pdName: k8s-mbe-swagger-json-data
		---

		apiVersion: v1
		kind: PersistentVolumeClaim
		metadata:
		  name: pv-claim-k8s-mbe-swagger-json-data
		  namespace: mockingbird
		spec:
		  storageClassName: "mockingbird-sc"
		  accessModes:
			- ReadWriteOnce
		  resources:
			requests:
			  storage: 50Gi
		---

		apiVersion: v1
		kind: PersistentVolume
		metadata:
		  name: pv-k8s-mbe-tomcat-logs-data
		spec:
		  storageClassName: "mockingbird-sc"
		  capacity:
			storage: 50Gi
		  accessModes:
			- ReadWriteOnce
		  claimRef:
			namespace: mockingbird
			name: pv-claim-k8s-mbe-tomcat-logs-data
		  gcePersistentDisk:
			pdName: k8s-mbe-tomcat-logs-data
		---

		apiVersion: v1
		kind: PersistentVolumeClaim
		metadata:
		  name: pv-claim-k8s-mbe-tomcat-logs-data
		  namespace: mockingbird
		spec:
		  storageClassName: "mockingbird-sc"
		  accessModes:
			- ReadWriteOnce
		  resources:
			requests:
			  storage: 50Gi
			  
```bash
kubectl apply -f servicestorage.yaml  -n mockingbird
```

