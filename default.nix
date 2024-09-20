{ stdenvNoCC, zs }:
stdenvNoCC.mkDerivation {
  name = "adtya_xyz";
  version = "2024-09-20";
  src = ./.;

  nativeBuildInputs = [ zs ];

  buildPhase = ''
    zs build
  '';

  installPhase = ''
    mkdir -p $out/share
    cp -r .pub $out/share/web
  '';
}
