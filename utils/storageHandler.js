export function getItem(key) {
    return CacheService.getUserCache().get(key)
}