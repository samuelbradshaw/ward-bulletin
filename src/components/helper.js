export async function presentLoading(args) {
  const loadingController = document.querySelector("ion-loading-controller");
  await loadingController.componentOnReady();

  const loading = await loadingController.create(args);
  return await loading.present();
}
