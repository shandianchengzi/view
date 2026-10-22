// Camera Translator uses 35mm-equivalent focal lengths and zoom = target / base.
// https://github.com/shandianchengzi/camera-translator/blob/main/calculator.js
// Convert this viewer's vertical FOV to the same diagonal-based 35mm convention.
const FULL_FRAME_DIAGONAL = Math.hypot(36, 24);
export function equivalentFocalLength(verticalFovDegrees, aspect) {
  if (!Number.isFinite(verticalFovDegrees) || verticalFovDegrees <= 0 || verticalFovDegrees >= 180 || !Number.isFinite(aspect) || aspect <= 0) return null;
  const equivalentHeight = FULL_FRAME_DIAGONAL / Math.hypot(aspect, 1);
  return equivalentHeight / (2 * Math.tan(verticalFovDegrees * Math.PI / 360));
}
